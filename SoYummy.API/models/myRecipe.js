// const mongoose = require('mongoose')
// const { Schema, model } = mongoose
// const { ObjectId, String, Number } = Schema.Types

// const recipeSchema = new Schema(
// 	{
// 		title: {
// 			type: String,
// 		},
// 		category: {
// 			type: String,
// 		},
// 		instructions: {
// 			type: String,
// 		},
// 		description: {
// 			type: String,
// 		},
// 		preview: {
// 			type: String,
// 		},
// 		time: {
// 			type: String,
// 		},
// 		ingredients: {
// 			type: [
// 				{
// 					type: ObjectId,
// 					ref: 'Ingredients',
// 				},
// 				{
// 					type: String,
// 				},
// 			],
// 		},
//     owner: {
//       type: ObjectId,
// 			ref: 'users',
//     }
// 	},
// 	{ versionKey: false, timestamps: true }
// )

// const Recipe = model('Recipe', recipeSchema, 'Recipes')

// module.exports = Recipe
