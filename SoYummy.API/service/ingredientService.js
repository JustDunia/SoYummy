const Ingredient = require('../models/ingredient')

// Pobierz listę składników
async function getIngredientList() {
	// po co to?? Rozumiem że nie chciałeś wyświetlać id?
	// Po 1. i tak id było zwracane, po 2. id jest potrzebne
	// return Ingredient.find({}, 'ttl desc t thb').exec()
	return Ingredient.find()
}

// Wyszukaj przepisy po nazwie składnika
async function searchRecipesByIngredient(ingredientName) {
	// po co to?? obecność ingredientName jest już sprawdzana na poziomie kontrolera
	// if (!ingredientName) {
	// 	throw new Error('Ingredient name is required')
	// }
	return Ingredient.find({ ttl: new RegExp(ingredientName, 'i') }).exec()
}

module.exports = {
	getIngredientList,
	searchRecipesByIngredient,
}
