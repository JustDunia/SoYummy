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
 * @param {ObjectId} id - Id uzytkownika
 */
const removeToken = async id => User.findByIdAndUpdate({ _id: id }, { token: null })

/**
 * Zmiana statusu subskrypcji
 * @param {ObjectId} id - Id użytkownika
 * @param {Boolean} isSubscriber - Czy użytkownik ma być subskrybentem
 */
const updateSubscription = async (id, isSubscriber) =>
	User.findByIdAndUpdate(id, { isSubscriber: isSubscriber }, { new: true })

/**
 * Dodaje przepis do ulubionych
 * @param {ObjectId} userId - Id użytkownika
 * @param {ObjectId} recipeId - Id przepisu
 */
const addToFavorites = async (userId, recipeId) =>
	User.findByIdAndUpdate(userId, { $addToSet: { favorites: recipeId } })

/**
 * Usuwa przepis z ulubionych
 * @param {ObjectId} userId - Id użytkownika
 * @param {ObjectId} recipeId - Id przepisu
 */
const removeFromFavorites = async (userId, recipeId) =>
	User.findByIdAndUpdate(userId, { $pull: { favorites: recipeId } })

module.exports = {
	createUser,
	getUserById,
	getUserByEmail,
	addToken,
	removeToken,
	updateSubscription,
	addToFavorites,
	removeFromFavorites,
}
