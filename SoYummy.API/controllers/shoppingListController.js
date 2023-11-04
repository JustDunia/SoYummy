const shoppingListService = require('../service/shoppingListService');

/**
 * Dodawanie składnika do listy zakupów
 */
async function addToShoppingList(req, res, next) {
  const { userId, ingredientId } = req.body;

  try {
    const result = await shoppingListService.addToShoppingList(userId, ingredientId);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    next(e); 
  }
}

/**
 * Usuwanie składnika z listy zakupów
 */
async function removeFromShoppingList(req, res, next) {
  const { userId, ingredientId } = req.body;

  try {
    const result = await shoppingListService.removeFromShoppingList(userId, ingredientId);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    next(e); 
  }
}

/**
 * Pobieranie listy zakupów użytkownika
 */
async function getShoppingList(req, res, next) {
  const userId = req.params.userId;

  try {
    const result = await shoppingListService.getShoppingList(userId);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    next(e); 
  }
}

module.exports = {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
};
