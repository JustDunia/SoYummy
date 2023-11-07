const Recipe = require('../models/recipe')
const { ObjectId } = require('mongoose')
const Ingredient = require('../models/ingredient')

/**
 * Zwraca tablicę obiektów Recipe na podstawie tablicy z ObjectId
 * @param {[ObjectId]} favorites - tablica id ulubionych przepisów
 */
const getUsersRecipes = favorites => Recipe.find({ _id: { $in: favorites } })

/**
 * Zwraca tablicę własnych przepisów użytkownika
 * @param {ObjectId} userId - id użytkownika
 */
const getOwnRecipes = async userId =>
	Recipe.find({ owner: userId }).populate({
		path: 'ingredients.id',
		model: 'Ingredient',
	})

/**
 * Dodaje własny przepis do kolekcji
 * @param {Recipe} recipe - nowy przepis
 */
const addOwnRecipe = async recipe => recipe.save()

/**
 * Usuwa własny przepis z kolekcji
 * @param {ObjectId} recipeId - id przepisu
 */
const removeOwnRecipe = async recipeId => Recipe.findByIdAndRemove(recipeId)

const getRecipeById = async recipeId => Recipe.findById(recipeId)

const getRecipeCategories = async () => Recipe.distinct('category').sort()

// jak już wszystkie fukcje są strzałkowe to tego się trzymajmy
// powinno być stronicowanie
// async function getRecipesByCategory(category) {
// 	return Recipe.find({ category })
// }
const getRecipesByCategory = async (category, page) =>
	Recipe.find({ category })
		.limit(8)
		.skip((page - 1) * 8)

// to samo ale z paginacją
//  const getRecipesByCategory = async (category, page, pageSize) => {
//   // Oblicz indeks początkowy na podstawie numeru strony i rozmiaru strony
//   const startIndex = (page - 1) * pageSize;

//   // Pobierz przepisy z danej kategorii, posortowane według popularności malejąco
//   const recipes = await Recipe.find({ category })
//     .sort({ popularity: -1 })
//     .skip(startIndex)
//     .limit(pageSize);

//   return recipes;
// };

const getRecipesByCategoryForMainPage = async categories => {
	const recipesByCategory = {}

	// sam serwis powinien mieć tylko metodę pobrania danych z bazy; kwestią sklejania różnych danych w jeden obiekt powinien zająć się już kontroler
	for (const category of categories) {
		const recipes = await Recipe.find({ category }).limit(4) // Pobierz przepisy dla danej kategorii
		recipesByCategory[category] = recipes
	}

	return recipesByCategory
}

const searchRecipesByKeyword = async keyword =>
	Recipe.find({ title: { $regex: keyword, $options: 'i' } })
// Użycie modelu Recipe i metody find, aby znaleźć przepisy pasujące do słowa kluczowego
// 	const recipes = await Recipe.find({ title: { $regex: keyword, $options: 'i' } })

// 	return recipes
// }

const getPopularRecipes = async () => Recipe.find().sort({ popularity: -1 })
// 	try {
// 		const popularRecipes = await
// 		return popularRecipes
// 	} catch (error) {
// 		throw new Error('Failed to download popular recipes.')
// 	}
// }

module.exports = {
	getRecipeById,
	getRecipeCategories,
	getRecipesByCategory,
	getRecipesByCategoryForMainPage,
	searchRecipesByKeyword,
	getPopularRecipes,
	getUsersRecipes,
	getOwnRecipes,
	addOwnRecipe,
	removeOwnRecipe,
}
