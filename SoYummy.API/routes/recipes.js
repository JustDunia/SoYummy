const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipesController');

/**
 * @swagger
 * /recipes/category-list:
 *    get:
 *      description: Get the list of recipe categories
 *      responses:
 *        200:
 *          description: List of recipe categories
 */
router.get('/category-list', recipesController.getCategories);

/**
 * @swagger
 * /recipes/main-page:
 *    get:
 *      description: Get recipes for the main page
 *      responses:
 *        200:
 *          description: Recipes for the main page
 */
router.get('/main-page', recipesController.getRecipesForMainPage);

/**
 * @swagger
 * /recipes/popular-recipes:
 *    get:
 *      description: Get popular recipes
 *      responses:
 *        200:
 *          description: List of popular recipes
 */
router.get('/popular-recipes', recipesController.getPopularRecipes);

/**
 * @swagger
 * /recipes/{category}:
 *    get:
 *      description: Get recipes by category
 *      parameters:
 *        - in: path
 *          name: category
 *          required: true
 *          schema:
 *            type: string
 *          description: Recipe category
 *      responses:
 *        200:
 *          description: Recipes in the specified category
 */
router.get('/:category', recipesController.getRecipesByCategory);

// router.get('/:id', recipesController.getRecipeById);

/**
 * @swagger
 * /recipes/id/{id}:
 *    get:
 *      description: Get a recipe by its ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Recipe ID
 *      responses:
 *        200:
 *          description: Recipe details
 */
router.get('/id/:id', recipesController.getRecipeById);

module.exports = router;

