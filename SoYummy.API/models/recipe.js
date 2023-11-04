const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId, String, Number } = Schema.Types

const recipeSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
		},
		category: {
			type: String,
			required: [true, 'Category is required'],
		},
		area: {
			type: String,
		},
		instructions: {
			type: String,
			required: [true, 'Instructions are required'],
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
			required: [true, 'Cooking time is required'],
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
					id: {
						type: ObjectId,
						ref: 'Ingredients',
						required: [true, 'Ingredients are required'],
					},
					measure: {
						type: String,
						required: [true, 'Measure is required'],
					},
					_id: false,
				},
			],
		},
		owner: {
			type: ObjectId,
			ref: 'users',
		},
	},
	{ versionKey: false, timestamps: true }
)

const Recipe = model('Recipe', recipeSchema, 'Recipes')

module.exports = Recipe
