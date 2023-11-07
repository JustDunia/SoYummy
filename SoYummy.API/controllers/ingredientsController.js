const ingredientService = require('../service/ingredientService')

async function getIngredientList(req, res, next) {
	try {
		const ingredients = await ingredientService.getIngredientList()
		res.json(ingredients)
	} catch (e) {
		console.error(e)
		next(e)
	}
}

async function searchRecipesByIngredient(req, res, next) {
	const { ingredientName } = req.query

	try {
		if (!ingredientName) {
			return res.status(400).json({ error: 'Ingredient name is required' })
		}

		const recipes = await ingredientService.searchRecipesByIngredient(ingredientName)
		res.json(recipes)
	} catch (e) {
		console.error(e)
		next(e)
	}
}

module.exports = {
	getIngredientList,
	searchRecipesByIngredient,
}
