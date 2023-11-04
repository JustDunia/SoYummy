const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const ownRecipesController = require('../controllers/ownRecipesController')

/**
 * @swagger
 * components:
 *   schemas:
 *     addRecipe:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Recipe's title
 *         category:
 *           type: string
 *           description: Recipe's category
 *         instructions:
 *           type: string
 *           description: Cooking instructions
 *         description:
 *           type: string
 *           description: Recipe's description
 *         time:
 *           type: string
 *           description: Cooking time
 *         ingredients:
 *           type: array
 *           items:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  description: Ingredient's id
 *                measure:
 *                  type: string
 *                  description: Ingredient's measure
 *     getRecipes:
 *       type: object
 *       properties:
 *          recipes:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                  description: Recipe's identifier
 *                title:
 *                  type: string
 *                  description: Recipe's title
 *                category:
 *                  type: string
 *                  description: Recipe's category
 *                instructions:
 *                  type: string
 *                  description: Cooking instructions
 *                description:
 *                  type: string
 *                  description: Recipe's description
 *                time:
 *                  type: string
 *                  description: Cooking time
 *                favorites:
 *                  type: array
 *                  items:
 *                    type: string
 *                likes:
 *                  type: array
 *                  items:
 *                    type: string
 *                tags:
 *                  type: array
 *                  items:
 *                    type: string
 *                ingredients:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: object
 *                          properties:
 *                            _id:
 *                              type: string
 *                              description: Ingredient's id
 *                            ttl:
 *                              type: string
 *                              description: Ingredient's name
 *                            desc:
 *                              type: string
 *                              description: Ingredient's description
 *                            t:
 *                              type: string
 *                            thb:
 *                              type: string
 *                              description: Ingredient's picture url
 *                        measure:
 *                          type: string
 *                          description: Ingredient's measure
 *                owner:
 *                  type: string
 *                  description: Owner's identifier
 *                createdAt:
 *                  type: string
 *                updatedAt:
 *                  type: string
 */

/**
 * @swagger
 * /ownRecipes:
 *    post:
 *      description: Add your own recipe
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/addRecipe'
 *      responses:
 *        201:
 *          description: Recipe added
 */
router.post('/', authenticate, ownRecipesController.addRecipe)

/**
 * @swagger
 * /ownRecipes:
 *    get:
 *      description: Get your own recipes
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Recipe added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#components/schemas/getRecipes'
 */
router.get('/', authenticate, ownRecipesController.getRecipes)

/**
 * @swagger
 * /ownRecipes/{recipeId}:
 *    delete:
 *      description: Remove your own recipe
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: recipeId
 *          schema:
 *            type: string
 *          required: true
 *      responses:
 *        204:
 *          description: Recipe removed
 */
router.delete('/:recipeId', authenticate, ownRecipesController.removeRecipe)

module.exports = router
