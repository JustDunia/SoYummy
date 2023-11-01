require('dotenv').config()
const Recipe = require('../models/recipe')
const service = require('../service/recipesService')
//const { ObjectId } = require('mongoose')

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

module.exports = { addRecipe }
