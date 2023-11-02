const userService = require('../service/userService')
const recipeService = require('../service/recipesService')

/**
 * Dodaja przepis do ulubionych
 */
async function addToFavorites(req, res, next) {
	const { recipeId } = req.params
	const userId = req.user.id

	try {
		await userService.addToFavorites(userId, recipeId)
		return res.status(200).json({ message: 'Recipe added to favorites' })
	} catch (e) {
		console.error(e)
		next(e)
	}
}

/**
 * Usuwa przepis z ulubionych
 */
async function removeFromFavorites(req, res, next) {
	const { recipeId } = req.params
	const userId = req.user.id

	try {
		await userService.removeFromFavorites(userId, recipeId)
		return res.status(200).json({ message: 'Recipe removed from favorites' })
	} catch (e) {
		console.error(e)
		next(e)
	}
}

/**
 * Zwraca ulubione przepisy użytkownika
 */
async function getFavorites(req, res, next) {
	const userId = req.user.id
	try {
		const user = await userService.getUserById(userId)
		const favorites = await recipeService.getUsersRecipes(user.favorites)
		return res.status(200).json({ email: user.email, favorites: favorites })
	} catch (e) {
		console.error(e)
		next(e)
	}
}

module.exports = {
	addToFavorites,
	removeFromFavorites,
	getFavorites,
}
