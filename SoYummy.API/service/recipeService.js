const Recipe = require('../models/recipe');

async function getRecipeById(recipeId) {
    return Recipe.findById(recipeId);
  }

  async function getRecipeCategories() {
    console.log('Rozpoczęcie pobierania kategorii');
    const categories = await Recipe.distinct('category').sort();
    return categories;
    
  }

module.exports = {
  getRecipeById,
  getRecipeCategories,
};
