const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// router.get('/search', searchController.searchRecipes);
/**
 * @swagger
 * /search:
 *   get:
 *     summary: Search for recipes by keyword in title
 *     description: Returns a list of recipes that match the provided keyword in the title.
 *     parameters:
 *       - in: query
 *         name: keyword
 *         schema:
 *           type: string
 *         required: true
 *         description: The keyword to search for in recipe titles.
 *     responses:
 *       200:
 *         description: List of recipes matching the provided keyword in the title.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recipe' # Zakładając, że istnieje definicja schematu dla przepisu (Recipe).
 *       400:
 *         description: Bad request. Invalid input or missing keyword.
 */
router.get('/', searchController.searchRecipes);

module.exports = router;