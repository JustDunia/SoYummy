const User = require('../models/user')
const service = require('../service/userService')

async function addToFavorite(req, res, next) {
	const { recipeId } = req.params
	const userId = req.user.id

	try {
		const user = await service.addToFavorite(userId, recipeId)
		return res.status(200).json({
			message: 'Recipe added to favorites',
			user: { email: user.email, favorites: user.favorites },
		})
	} catch (e) {
		console.error(e)
		next(e)
	}
}

module.exports = {
	addToFavorite,
}
