const ShoppingListService = require('../service/shoppingListService');

async function addProductToShoppingList(req, res, next) {
  const { userId, productId } = req.body;
  try {
    await ShoppingListService.addProductToShoppingList(userId, productId);
    res.status(201).json({ message: 'Produkt został dodany do listy zakupów.' });
  } catch (e) {
		console.error(e)
		next(e)
	}
}

async function removeProductFromShoppingList(req, res, next) {
  const { userId, productId } = req.body;
  try {
    await ShoppingListService.removeProductFromShoppingList(userId, productId);
    res.json({ message: 'Produkt został usunięty z listy zakupów.' });
  } catch (e) {
		console.error(e)
		next(e)
	}
}

async function getShoppingList(req, res, next) {
  const userId = req.params.userId;
  try {
    const shoppingList = await ShoppingListService.getShoppingList(userId);
    res.json(shoppingList);
  } catch (e) {
		console.error(e)
		next(e)
	}
}

module.exports = {
  addProductToShoppingList,
  removeProductFromShoppingList,
  getShoppingList,
};