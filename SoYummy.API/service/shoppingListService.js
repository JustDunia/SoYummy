const Recipe = require('../models/recipe')
const User = require('../models/user')

const addProductToShoppingList = async (userId, productId) => {
	try {
		const user = await User.findById(userId)
		user.shoppingList.push(productId)
		await user.save()
	} catch (error) {
		throw new Error('Nie udało się dodać produktu do listy zakupów.')
	}
}

const removeProductFromShoppingList = async (userId, productId) => {
	try {
		const user = await User.findById(userId)
		user.shoppingList = user.shoppingList.filter(id => id !== productId)
		await user.save()
	} catch (error) {
		throw new Error('Nie udało się usunąć produktu z listy zakupów.')
	}
}

const getShoppingList = async userId => {
	try {
		const user = await User.findById(userId)
		const shoppingList = await Recipe.find({ _id: { $in: user.shoppingList } })
		return shoppingList
	} catch (error) {
		throw new Error('Nie udało się pobrać listy zakupów.')
	}
}

module.exports = {
	addProductToShoppingList,
	removeProductFromShoppingList,
	getShoppingList,
}
