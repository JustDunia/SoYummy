require('dotenv').config()
// poprawiony sposób importu (bez klamr User nie był importowany)
const { User } = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET

// Funkcja obsługująca rejestrację użytkownika
// Te funkcje powinny być asynchroniczne
async function registerUser(req, res, next) {
	const { username, password, email } = req.body

	// Sprawdź, czy użytkownik o podanej nazwie użytkownika lub adresie email już istnieje w bazie danych
	// "Model.findOne() no longer accepts a callback"
	// błąd serwera jest już obsłużony na poziomie centralnym, nie trzeba go pisać przy każdym odpytaniu bazy
	// TODO odwołania do bazy danych przenieść do oddzielnych serwisów
	// TODO metody hashowania hasła itp. przenieść do modelu User
	try {
		const user = await User.findOne({ email: email })
		if (user)
			return res.status(400).json({ error: 'Użytkownik o takim adresie email już istnieje.' })

		// Jeśli użytkownik nie istnieje, zahashuj hasło i zapisz do bazy danych
		const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(6))

		const newUser = new User({
			username,
			password: hashedPassword,
			email,
		})

		await newUser.save()

		// Zarejestrowano pomyślnie
		return res.status(201).json({
			message: 'Rejestracja pomyślna',
			user: { username: newUser.username, email: newUser.email },
		})
	} catch (e) {
		console.error(e)
		next(e)
	}
}

// Funkcja obsługująca logowanie użytkownika
function loginUser(req, res) {
	const { username, password } = req.body

	// Sprawdź, czy użytkownik o podanej nazwie użytkownika istnieje w bazie danych
	User.findOne({ username }, (err, user) => {
		if (err) {
			return res.status(500).json({ error: 'Błąd serwera' })
		}

		if (!user) {
			return res.status(404).json({ error: 'Użytkownik nie istnieje' })
		}

		// Porównaj hasło
		bcrypt.compare(password, user.password, (err, passwordMatch) => {
			if (err) {
				return res.status(500).json({ error: 'Błąd serwera' })
			}

			if (!passwordMatch) {
				return res.status(401).json({ error: 'Niepoprawne hasło' })
			}

			// Wygeneruj token JWT i zwróć go w odpowiedzi
			const token = jwt.sign({ userId: user._id }, SECRET)
			return res.status(200).json({ token })
		})
	})
}

// Funkcja obsługująca wylogowanie użytkownika
function logoutUser(req, res) {
	// Realizuj logikę wylogowania, na przykład usuwając token z bazy danych lub inaczej invaliderując sesję
	// Po wylogowaniu zwróć odpowiednią odpowiedź
	return res.status(200).json({ message: 'Wylogowano pomyślnie' })
}

// Funkcja obsługująca reset hasła użytkownika
function resetPassword(req, res) {
	// Realizuj logikę resetowania hasła, na przykład wysyłając e-mail z linkiem do resetowania
	// Po zakończeniu resetowania zwróć odpowiednią odpowiedź
	return res.status(200).json({ message: 'Reset hasła pomyślny' })
}

// Funkcja obsługująca zmianę hasła użytkownika
function changePassword(req, res) {
	const { userId, currentPassword, newPassword } = req.body

	// Pobierz użytkownika na podstawie userId
	User.findById(userId, (err, user) => {
		if (err) {
			return res.status(500).json({ error: 'Błąd serwera' })
		}

		if (!user) {
			return res.status(404).json({ error: 'Użytkownik nie istnieje' })
		}

		// Porównaj aktualne hasło
		bcrypt.compare(currentPassword, user.password, (err, passwordMatch) => {
			if (err) {
				return res.status(500).json({ error: 'Błąd serwera' })
			}

			if (!passwordMatch) {
				return res.status(401).json({ error: 'Niepoprawne hasło' })
			}

			// Zaktualizuj hasło na nowe
			bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
				if (err) {
					return res.status(500).json({ error: 'Błąd serwera' })
				}

				user.password = hashedPassword

				user.save(err => {
					if (err) {
						return res.status(500).json({ error: 'Błąd serwera' })
					}

					// Hasło zostało zaktualizowane pomyślnie
					return res.status(200).json({ message: 'Hasło zostało zmienione' })
				})
			})
		})
	})
}

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	resetPassword,
	changePassword,
}
