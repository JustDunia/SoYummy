require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET
const service = require('../service/userService')
const Joi = require('joi')

/**
 * schemat walidacji parametrów przesłanych podczas rejestracji
 */
const registerSchema = Joi.object({
	username: Joi.string().min(2).max(30).required(),
	password: Joi.string().min(8).max(30).required(),
	email: Joi.string().email().required(),
})

/**
 * schemat walidacji parametrów przesłanych podczas logowania
 */
const loginSchema = Joi.object({
	password: Joi.string().required(),
	email: Joi.string().email().required(),
})

/**
 * Funkcja obsługująca rejestrację użytkownika
 */
async function registerUser(req, res, next) {
	const { username, email, password } = req.body

	const validationResult = registerSchema.validate({
		username: username,
		email: email,
		password: password,
	})

	if (!validationResult.error) {
		try {
			const user = await service.getUserByEmail(email)
			if (user) {
				return res.status(400).json({ error: 'Email is already in use' })
			}

			const newUser = new User({
				username,
				email,
			})

			newUser.setPassword(password)

			const result = await service.createUser(newUser)

			return res.status(201).json({
				message: 'Registration successful',
				user: { username: result.username, email: result.email },
			})
		} catch (e) {
			console.error(e)
			next(e)
		}
	} else {
		return res.status(400).json({
			message: validationResult.error.message,
		})
	}
}

/**
 * Funkcja obsługująca logowanie użytkownika
 */
async function loginUser(req, res, next) {
	const { email, password } = req.body

	const validationResult = loginSchema.validate({
		email: email,
		password: password,
	})

	if (!validationResult.error) {
		try {
			const user = await service.getUserByEmail(email)

			if (!user) {
				return res.status(404).json({ error: 'User not found' })
			}

			if (!user.validatePassword(password)) {
				return res.status(401).json({
					message: 'Password is wrong',
				})
			}

			const payload = {
				id: user.id,
				email: user.email,
			}

			const token = jwt.sign(payload, SECRET)

			await service.addToken(email, token)

			return res
				.status(200)
				.json({ message: 'Signing in successful', userData: { email: email, token: token } })
		} catch (e) {
			console.error(e)
			next(e)
		}
	} else {
		return res.status(400).json({
			message: validationResult.error.message,
		})
	}
}

/**
 * Funkcja obsługująca wylogowanie użytkownika
 */
async function logoutUser(req, res, next) {
	const id = req.user.id
	try {
		await service.removeToken(id)
		res.status(204).send()
	} catch (e) {
		console.error(e)
		next(e)
	}
}

/**
 * Funkcja obsługująca pobranie danych aktualnego użytkownika
 */
const getCurrentUser = async (req, res) => {
	const { username, email } = req.user
	res.status(200).json({
		username: username,
		email: email,
	})
}

/**
 * Funkcja obsługująca zapisanie / wypisanie z newslettera
 */
const manageSubscription = async (req, res, next) => {
	const { id, isSubscriber } = req.user
	try {
		const user = await service.updateSubscription(id, !isSubscriber)
		return res.status(200).json({
			message: 'Subscription status updated',
			userData: { email: user.email, isSubscriber: user.isSubscriber },
		})
	} catch (e) {
		console.error(e)
		next(e)
	}
}

/**
 * Funkcja aktualizacji danych użytkownika
 * TODO do zrobienia po zorientowaniu się jakie dane użytkownika rzeczywiście będą potrzebowały mieć możliwość zmiany
 */
const updateUser = async (req, res, next) => {}

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	getCurrentUser,
	manageSubscription,
}
