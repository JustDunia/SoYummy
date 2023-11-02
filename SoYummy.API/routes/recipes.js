const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

router.get('/category-list', recipesController.getCategories);
router.get('/main-page', recipesController.getRecipesForMainPage);
router.get('/:category', recipesController.getRecipesByCategory);
// router.get('/:id', recipesController.getRecipeById);
router.get('/id/:id', recipesController.getRecipeById);
// router.get('/', recipesController.getRecipeById);
module.exports = router;


// const express = require('express');
// const router = express.Router();

// // Punkt końcowy API do uzyskania listy kategorii
// router.get('/category-list', (req, res) => {
//   // Posortuj listę kategorii alfabetycznie
//   const categories = [
//     'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb',
//     'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter',
//     'Vegan', 'Vegetarian'
//   ].sort();

//   res.json(categories);
// });

// module.exports = router;
