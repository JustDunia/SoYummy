const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authenticate')
const favoritesController = require('../controllers/favoritesController')

router.patch('/:recipeId', authenticate, favoritesController.addToFavorite)

module.exports = router
