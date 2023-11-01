const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const favoritesController = require('../controllers/favoritesController')

/**
 * @swagger
 * /favorite/{recipeId}:
 *    put:
 *      description: Add recipe to favorites
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *         - in: path
 *           name: recipeId
 *           schema:
 *             type: string
 *           required: true
 *      responses:
 *        200:
 *          description: Recipe added to favorites
 */
router.put('/:recipeId', authenticate, favoritesController.addToFavorites)

/**
 * @swagger
 * /favorite/{recipeId}:
 *  patch:
 *    description: Remove recipe from favorites
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *       - in: path
 *         name: recipeId
 *         schema:
 *           type: string
 *         required: true
 *    responses:
 *      200:
 *        description: Recipe removed from favorites
 */
router.patch('/:recipeId', authenticate, favoritesController.removeFromFavorites)

/**
 * @swagger
 * /favorite:
 *    get:
 *      description: Get favorite recipes
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Array of user's favorite recipes
 */
router.get('/', authenticate, favoritesController.getFavorites)

module.exports = router
