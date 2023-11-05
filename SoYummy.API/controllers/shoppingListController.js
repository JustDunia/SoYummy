require('dotenv').config();
const shoppingListService = require('../service/shoppingListService');
const authenticate = require('../middleware/authenticate');

/**
 * Dodawanie składnika do listy zakupów
 */
const addToShoppingList = async (req, res, next) =>  {
  const userId = req.user.id;
  const { ingredientId, measure } = req.body;

  console.log('Request to add ingredient to shopping list:', userId, ingredientId, measure);

  try {
    const result = await shoppingListService.addToShoppingList(userId, ingredientId, measure);
    console.log(userId, ingredientId, measure);
    console.log('Ingredient added to shopping list successfully:', result);
    return res.status(201).json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

/**
 * Usuwanie składnika z listy zakupów
 */
const removeFromShoppingList = async (req, res, next) =>  {
  const userId = req.user.id;
  const { ingredientId } = req.body;
   

  console.log('Request to remove ingredient from shopping list:', userId, ingredientId);

  try {
    const result = await shoppingListService.removeFromShoppingList(userId, ingredientId);
    console.log('Ingredient removed from shopping list successfully:', result);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

/**
 * Pobieranie listy zakupów użytkownika
 */
const getShoppingList = async (req, res, next) => {
  const userId = req.user.id; 

  console.log('Request to get shopping list for user:', userId);

  try {
    const result = await shoppingListService.getShoppingList(userId);
    console.log('Shopping list retrieved successfully:', result);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

console.log('ShoppingList controller initialized.');

module.exports = {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
};
