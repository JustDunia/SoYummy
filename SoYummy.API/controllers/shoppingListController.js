const ShoppingListService = require('../service/shoppingListService');

async function addProductToShoppingList(req, res) {
  const { userId, productId } = req.body;
  try {
    await ShoppingListService.addProductToShoppingList(userId, productId);
    res.status(201).json({ message: 'Produkt został dodany do listy zakupów.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function removeProductFromShoppingList(req, res) {
  const { userId, productId } = req.body;
  try {
    await ShoppingListService.removeProductFromShoppingList(userId, productId);
    res.json({ message: 'Produkt został usunięty z listy zakupów.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

async function getShoppingList(req, res) {
  const userId = req.params.userId;
  try {
    const shoppingList = await ShoppingListService.getShoppingList(userId);
    res.json(shoppingList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
}

module.exports = {
  addProductToShoppingList,
  removeProductFromShoppingList,
  getShoppingList,
};