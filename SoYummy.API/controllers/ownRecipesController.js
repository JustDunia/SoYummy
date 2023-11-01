require('dotenv').config()
const Recipe = require('../models/recipe')
const service = require('../service/recipesService')

/**
 * Dodaje własny przepis do kolekcji
 */
const addRecipe = async (req, res, next) => {
	const userId = req.user.id
	const { title, category, instructions, description, preview, time, ingredients } = req.body
	try {
		const recipe = new Recipe({
			title,
			category,
			instructions,
			description,
			preview,
			time,
			ingredients,
			owner: userId,
		})
		const result = await service.addOwnRecipe(recipe)
		return res.status(201).json({ message: 'Recipe added', recipe: result })
	} catch (e) {
		console.error(e)
		next(e)
	}
}

/**
 * Zwraca tablicę własnych przepisów użytkownika
 */
const getRecipes = async (req, res, next) => {
	const userId = req.user.id
	try {
		const recipes = await service.getOwnRecipes(userId)
		return res.status(200).json({ recipes: recipes })
	} catch (e) {
		console.error(e)
		next(e)
	}
}

/**
 * Usuwa własny przepis z kolekcji
 */
const removeRecipe = async (req, res, next) => {
	const { recipeId } = req.params
	try {
		await service.removeOwnRecipe(recipeId)
		return res.status(204).send()
	} catch (e) {
		console.error(e)
		next(e)
	}
}

module.exports = { addRecipe, getRecipes, removeRecipe }
