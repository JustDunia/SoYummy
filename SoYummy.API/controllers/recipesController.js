const RecipeService = require("../service/recipeService");

async function getCategories(req, res) {
  try {
    const categories = await RecipeService.getRecipeCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}

async function getRecipesByCategory(req, res) {
  const category = req.params.category;

  try {
    const recipes = await RecipeService.getRecipesByCategory(category);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}

async function getRecipeDetails(req, res) {
  const recipeId = req.params.recipeId;

  try {
    const recipe = await RecipeService.getRecipeById(recipeId);
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
}

async function getRecipesForMainPage(req, res) {
  const category = req.query.category;
  try {
     // Pobierz kategorie i przepisy (tutaj trzeba dostosować do twoich potrzeb)
     const categories = await RecipeService.getRecipeCategories();
     const recipesByCategory = await RecipeService.getRecipesByCategoryForMainPage(categories);
 
     // Przygotuj dane do wyświetlenia na stronie głównej i zwróć jako odpowiedź
     const data = {
       categories,
       recipesByCategory,
     };
     
     res.json(data);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: 'Server Error' });
   }
 }

module.exports = {
  getCategories,
  getRecipesByCategory,
  getRecipeDetails,
  getRecipesForMainPage,
};
