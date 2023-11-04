// na main był już ten model, więc podmieniłam
const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { String } = Schema.Types

const ingredientSchema = new Schema({
	ttl: {
		type: String,
	},
	desc: {
		type: String,
	},
	t: {
		type: String,
	},
	thb: {
		type: String,
	},
})

const Ingredient = model('Ingredient', ingredientSchema, 'Ingredients')

module.exports = Ingredient
