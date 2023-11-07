const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const shoppingListController = require('../controllers/shoppingListController');

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT

@swagger
 * /shopping-list/add:
 *   post:
 *     summary: Add an ingredient to the shopping list.
 *     tags:
 *       - Shopping List
 *     security:
 *       - bearerAuth: []   # Dodaj autentykację
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               ingredientId:
 *                 type: string
 *               measure:
 *                 type: string
 *             required:
 *               - userId
 *               - ingredientId
 *               - measure
 *     responses:
 *       200:
 *         description: Successfully added the ingredient to the shopping list.
 */
router.post('/add', authenticate, shoppingListController.addToShoppingList);

/**
 * @swagger
 * /shopping-list/remove:
 *   delete:
 *     summary: Remove an ingredient from the shopping list.
 *     tags:
 *       - Shopping List
 *     security:
 *       - bearerAuth: []   # Dodaj autentykację
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ingredientId:
 *                 type: string
 *             required:
 *               - ingredientId
 *     responses:
 *       200:
 *         description: Successfully removed the ingredient from the shopping list.
 */
router.delete('/remove', authenticate, shoppingListController.removeFromShoppingList);

/**
 * @swagger
 * /shopping-list/list/{userId}:
 *   get:
 *     summary: Get the shopping list of a user.
 *     tags:
 *       - Shopping List
 *     security:
 *       - bearerAuth: []   # Dodaj autentykację
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user.
 *     responses:
 *       200:
 *         description: Successfully retrieved the shopping list of the user.
 */
router.get('/list/:userId', authenticate, shoppingListController.getShoppingList);

module.exports = router;
