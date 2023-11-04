const RecipeService = require("../service/recipeService");

async function getCategories(req, res, next) {
  try {
    const categories = await RecipeService.getRecipeCategories();
    res.json(categories);
  } catch (e) {
		console.error(e)
		next(e)
	}
}

async function getRecipesByCategory(req, res, next) {
  const { category } = req.params;

  try {
    const recipes = await RecipeService.getRecipesByCategory(category);
    // Zwróć tylko pierwsze 8 przepisów
    const first8Recipes = recipes.slice(0, 8);
    res.json(first8Recipes);
  } catch (e) {
		console.error(e)
		next(e)
	}
}

// to samo ale z paginacją
// async function getRecipesByCategory(req, res, next) {
//   const { category, page, pageSize } = req.params;

//   try {
//     const recipes = await RecipeService.getRecipesByCategory(category, page, pageSize);
//     res.json(recipes);
// } catch (e) {
//   console.error(e)
//   next(e)
// }
// }

// to samo ale bez ograniczeń
// async function getRecipesByCategory(req, res, next) {
//   const category = req.params.category;

//   try {
//     const recipes = await RecipeService.getRecipesByCategory(category);
//     res.json(recipes);
// } catch (e) {
//   console.error(e)
//   next(e)
// }
//   }
// }

// async function getRecipeById(req, res, next) {
//   const recipeId = req.params.recipeId;

//   try {
//     const recipe = await RecipeService.getRecipeById(recipeId);
//     res.json(recipe);
// } catch (e) {
//   console.error(e)
//   next(e)
// }
// }

async function getRecipesForMainPage(req, res, next) {
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
    } catch (e) {
      console.error(e)
      next(e)
    }
 }

 async function getRecipeById(req, res, next) {
  const recipeId = req.params.id;
  try {
    const recipe = await RecipeService.getRecipeById(recipeId);
    if (!recipe) {
      // Jeśli przepis o danym ID nie istnieje, możesz zwrócić odpowiedni status
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.json(recipe);
    }
  } catch (e) {
		console.error(e)
		next(e)
	}
}

async function getPopularRecipes(req, res, next) {
  try {
    const popularRecipes = await RecipeService.getPopularRecipes();

    if (popularRecipes.length > 0) {
      res.json(popularRecipes);
    } else {
      res.status(404).json({ message: 'No popular recipes at the moment.' });
    }
  } catch (e) {
		console.error(e)
		next(e)
	}
}


module.exports = {
  getCategories,
  getRecipesByCategory,
  getRecipesForMainPage,
  getRecipeById,
  getPopularRecipes,
};
