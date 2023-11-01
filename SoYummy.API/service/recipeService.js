const Recipe = require('../models/recipe');

const getRecipeById = async (recipeId) => Recipe.findById(recipeId);

const getRecipeCategories = async () => {
  console.log('Rozpoczęcie pobierania kategorii');
  const categories = await Recipe.distinct('category').sort();
  return categories;
};

 const getRecipesByCategory = async (category) => {
  console.log('Rozpoczęcie pobierania przepisów po kategorii');
  return Recipe.find({ category });
}

const getRecipesByCategoryForMainPage = async (categories) => {
  const recipesByCategory = {};

  for (const category of categories) {
    const recipes = await Recipe.find({ category }); // Pobierz przepisy dla danej kategorii
    recipesByCategory[category] = recipes;
  }

  return recipesByCategory;
}

module.exports = {
  getRecipeById,
  getRecipeCategories,
  getRecipesByCategory,
  getRecipesByCategoryForMainPage,
};
