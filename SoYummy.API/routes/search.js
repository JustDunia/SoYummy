const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// router.get('/search', searchController.searchRecipes);
router.get('/', searchController.searchRecipes);

module.exports = router;