const RecipeService = require('../service/recipesService')

// Kontroler obsługujący wyszukiwanie przepisów
async function searchRecipes(req, res, next) {
	const keyword = req.query.keyword // Pobierz słowo kluczowe z zapytania
	try {
		// Wywołaj funkcję z serwisu do wyszukiwania przepisów
		const recipes = await RecipeService.searchRecipesByKeyword(keyword)

		res.json(recipes) // Odpowiedz z wynikami wyszukiwania
	} catch (e) {
		console.error(e)
		next(e)
	}
}

module.exports = {
	searchRecipes,
}
