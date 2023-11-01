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
  const { category } = req.params;

  try {
    const recipes = await RecipeService.getRecipesByCategory(category);
    // Zwróć tylko pierwsze 8 przepisów
    const first8Recipes = recipes.slice(0, 8);
    res.json(first8Recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

// to samo ale z paginacją
// async function getRecipesByCategory(req, res) {
//   const { category, page, pageSize } = req.params;

//   try {
//     const recipes = await RecipeService.getRecipesByCategory(category, page, pageSize);
//     res.json(recipes);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server Error' });
//   }
// }

// to samo ale bez ograniczeń
// async function getRecipesByCategory(req, res) {
//   const category = req.params.category;

//   try {
//     const recipes = await RecipeService.getRecipesByCategory(category);
//     res.json(recipes);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server Error" });
//   }
// }

async function getRecipeById(req, res) {
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

//  async function getRecipeById(req, res) {
//   const recipeId = req.params.id;

//   try {
//     const recipe = await RecipeService.getRecipeById(recipeId);
//     if (!recipe) {
//       // Jeśli przepis o danym ID nie istnieje, możesz zwrócić odpowiedni status
//       res.status(404).json({ error: 'Recipe not found' });
//     } else {
//       res.json(recipe);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server Error' });
//   }
// }

module.exports = {
  getCategories,
  getRecipesByCategory,
  // getRecipeDetails,
  getRecipesForMainPage,
  getRecipeById,
};
