const RecipeService = require('../service/recipeService')

async function getCategories(req, res, next) {
	try {
		const categories = await RecipeService.getRecipeCategories()
		res.json(categories)
	} catch (e) {
		console.error(e)
		next(e)
	}
}

async function getRecipesByCategory(req, res, next) {
	const { category } = req.params
	let { page } = req.query

	if (!page || page == 0) page = 1
	try {
		const recipes = await RecipeService.getRecipesByCategory(category, page)
		// Owszem, powinno być 8 przepisów, ale na każdej stronie, a tu za każdym razem zwracasz pierwsze 8 przepisów
		// // Zwróć tylko pierwsze 8 przepisów
		// const first8Recipes = recipes.slice(0, 8)
		res.json(recipes)
	} catch (e) {
		console.error(e)
		next(e)
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

// async function getRecipeById(req, res) {
//   const recipeId = req.params.recipeId;

//   try {
//     const recipe = await RecipeService.getRecipeById(recipeId);
//     res.json(recipe);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server Error" });
//   }
// }

async function getRecipesForMainPage(req, res, next) {
	try {
		// Pobierz kategorie i przepisy (tutaj trzeba dostosować do twoich potrzeb)
		const categories = await RecipeService.getRecipeCategories()
		const recipesByCategory = await RecipeService.getRecipesByCategoryForMainPage(categories)

		// Nie ma potrzeby zwracania listy kategorii
		// Przygotuj dane do wyświetlenia na stronie głównej i zwróć jako odpowiedź
		// const data = {
		// 	categories,
		// 	recipesByCategory,
		// }

		res.json(recipesByCategory)
	} catch (e) {
		console.error(e)
		next(e)
	}
}

async function getRecipeById(req, res, next) {
	//console.log('Kontroler getRecipeById został wywołany')
	const recipeId = req.params.id
	//console.log(`Incoming request for recipe with ID: ${recipeId}`)
	try {
		const recipe = await RecipeService.getRecipeById(recipeId)
		if (!recipe) {
			// Jeśli przepis o danym ID nie istnieje, możesz zwrócić odpowiedni status
			res.status(404).json({ error: 'Recipe not found' })
		} else {
			res.json(recipe)
		}
	} catch (e) {
		console.error(e)
		next(e)
	}
}

async function getPopularRecipes(req, res, next) {
	try {
		const popularRecipes = await RecipeService.getPopularRecipes()

		//if (popularRecipes.length > 0) {
		res.json(popularRecipes)
		// } else {
		// 	res.status(404).json({ message: 'No popular recipes at the moment.' })
		// }
	} catch (e) {
		console.error(e)
		next(e)
	}
}

module.exports = {
	getCategories,
	getRecipesByCategory,
	// getRecipeDetails,
	getRecipesForMainPage,
	getRecipeById,
	getPopularRecipes,
}
