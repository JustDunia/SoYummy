const shoppingListService = require('../service/shoppingListService');

/**
 * Dodawanie składnika do listy zakupów
 */
async function addToShoppingList(req, res, next) {
  const { userId, ingredientId } = req.body;

  console.log('Request to add ingredient to shopping list:', userId, ingredientId); // Dodaj tę linię

  try {
    const result = await shoppingListService.addToShoppingList(userId, ingredientId);
    console.log('Ingredient added to shopping list successfully:', result); // Dodaj tę linię
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

  console.log('Request to remove ingredient from shopping list:', userId, ingredientId); // Dodaj tę linię

  try {
    const result = await shoppingListService.removeFromShoppingList(userId, ingredientId);
    console.log('Ingredient removed from shopping list successfully:', result); // Dodaj tę linię
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

  console.log('Request to get shopping list for user:', userId); // Dodaj tę linię

  try {
    const result = await shoppingListService.getShoppingList(userId);
    console.log('Shopping list retrieved successfully:', result); // Dodaj tę linię
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

console.log('ShoppingList controller initialized.'); // Dodaj tę linię

module.exports = {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
};
