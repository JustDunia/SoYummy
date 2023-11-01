const Recipe = require('../models/recipe');

const getRecipeById = async (recipeId) => Recipe.findById(recipeId);

const getRecipeCategories = async () => {
  console.log('Rozpoczęcie pobierania kategorii');
  const categories = await Recipe.distinct('category').sort();
  return categories;
};

async function getRecipesByCategory(category) {
  return Recipe.find({ category });
}
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


const getRecipesByCategoryForMainPage = async (categories) => {
  const recipesByCategory = {};

  for (const category of categories) {
    const recipes = await Recipe.find({ category }); // Pobierz przepisy dla danej kategorii
    recipesByCategory[category] = recipes;
  }

  return recipesByCategory;
}

const searchRecipesByKeyword = async (keyword) => {
  // Użycie modelu Recipe i metody find, aby znaleźć przepisy pasujące do słowa kluczowego
  const recipes = await Recipe.find({ title: { $regex: keyword, $options: 'i' } });

  return recipes;
}

module.exports = {
  getRecipeById,
  getRecipeCategories,
  getRecipesByCategory,
  getRecipesByCategoryForMainPage,
  searchRecipesByKeyword,
};
