const express = require('express');
const router = express.Router();
const shoppingListController = require('../controllers/shoppingListController');

router.post('/add-product', shoppingListController.addProductToShoppingList);
router.post('/remove-product', shoppingListController.removeProductFromShoppingList);
router.get('/:userId', shoppingListController.getShoppingList);

module.exports = router;