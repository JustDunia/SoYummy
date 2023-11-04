const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredientsController");

/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: API for managing ingredients and recipes
 */

/**
 * @swagger
 * /ingredients/list:
 *   get:
 *     summary: Get the list of ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of ingredients
 *       500:
 *         description: Internal server error
 */
router.get("/list", ingredientsController.getIngredientList);

/**
 * @swagger
 * /ingredients:
 *   get:
 *     summary: Search recipes by ingredient name
 *     tags: [Ingredients]
 *     parameters:
 *       - in: query
 *         name: ingredientName
 *         required: true
 *         description: Name of the ingredient to search for recipes
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully searched for recipes
 *       400:
 *         description: Ingredient name is required
 *       500:
 *         description: Internal server error
 */
router.get("/", ingredientsController.searchRecipesByIngredient);

module.exports = router;
