const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const ownRecipesController = require('../controllers/ownRecipesController')

/**
 * @swagger
 * /ownRecipes
 *    post:
 *      description: Add your own recipe
 *      security:
 *        - bearerAuth: []
 *      requestbody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: #components/schemas/addRecipe
 *      responses:
 *        200:
 *          description: Recipe added to favorites
 */
router.post('/', authenticate, ownRecipesController.addRecipe)

router.get('/', authenticate, ownRecipesController.getRecipes)

router.delete('/:recipeId', authenticate, ownRecipesController.removeRecipe)

module.exports = router
