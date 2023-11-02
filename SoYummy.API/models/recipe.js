const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId, String, Number } = Schema.Types

const recipeSchema = new Schema(
	{
		title: {
			type: String,
		},
		category: {
			type: String,
		},
		area: {
			type: String,
		},
		instructions: {
			type: String,
		},
		description: {
			type: String,
		},
		thumb: {
			type: String,
		},
		preview: {
			type: String,
		},
		time: {
			type: String,
		},
		popularity: {
			type: Number,
		},
		favorites: {
			type: [ObjectId],
		},
		likes: {
			type: [ObjectId],
		},
		youtube: {
			type: String,
		},
		tags: {
			type: [String],
		},
		ingredients: {
			type: [
				{
					type: ObjectId,
					ref: 'Ingredients',
				},
				{
					type: String,
				},
			],
		},
	},
	{ versionKey: false, timestamps: true }
)

const Recipe = model('Recipe', recipeSchema, 'Recipes')

module.exports = Recipe
