const RecipeService = require("../service/recipeService");

// Kontroler obsługujący wyszukiwanie przepisów
async function searchRecipes(req, res) {
  const keyword = req.query.keyword; // Pobierz słowo kluczowe z zapytania
  try {
    // Wywołaj funkcję z serwisu do wyszukiwania przepisów
    const recipes = await RecipeService.searchRecipesByKeyword(keyword);

    res.json(recipes); // Odpowiedz z wynikami wyszukiwania
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

module.exports = {
  searchRecipes,
};