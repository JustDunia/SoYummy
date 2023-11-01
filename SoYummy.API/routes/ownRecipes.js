const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const ownRecipesController = require('../controllers/ownRecipesController')

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
router.post('/', authenticate, ownRecipesController.addRecipe)

router.get('/', authenticate, ownRecipesController.getRecipes)

module.exports = router
