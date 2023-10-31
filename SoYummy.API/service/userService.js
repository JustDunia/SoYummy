const User = require('../models/user')
const { ObjectId } = require('mongoose')

/**
 * Dodanie nowego użytkownika do kolekcji
 * @param {User} user - obiekt nowego użytkownika
 */
const createUser = async user => user.save()

/**
 * Pobranie użytkownika na podstawie id
 * @param {ObjectId} id - Id użytkownika
 */
const getUserById = async id => User.findOne({ _id: id })

/**
 * Pobranie użytkownika na podstawie adresu email
 * @param {string} email - adres email użytkownika
 */
const getUserByEmail = async email => User.findOne({ email: email })

/**
 * Przypisanie tokena użytkownikowi
 * @param {string} email - adres email użytkownika
 * @param {string} token - token nadany użytkownikowi
 */
const addToken = async (email, token) => User.findOneAndUpdate({ email: email }, { token: token })

/**
 * Usunięcie tokena autoryzacyjnego użytkownika
 * @param {ObjectId} param - Id uzytkownika
 */
const removeToken = async id => User.findByIdAndUpdate({ _id: id }, { token: null })

/**
 * Zmiana statusu subskrypcji
 * @param {ObjectId} param - Id użytkownika
 * @param {Boolean} param - Czy użytkownik ma być subskrybentem
 */
const updateSubscription = async (id, isSubscriber) =>
	User.findByIdAndUpdate({ _id: id }, { isSubscriber: isSubscriber }, { new: true })

const addToFavorite = async (userId, recipeId) =>
	User.findByIdAndUpdate({ _id: userId }, { $push: { favorites: recipeId } }, { new: true })

module.exports = {
	createUser,
	getUserByEmail,
	addToken,
	removeToken,
	updateSubscription,
	addToFavorite,
}
