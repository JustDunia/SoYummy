const ShoppingList = require('../models/shoppingList');

// Dodawanie składnika do listy zakupów użytkownika
const addToShoppingList = async (userId, ingredientId) => {
  console.log('Adding ingredient to the shopping list:', userId, ingredientId);
  const shoppingList = await ShoppingList.findOne({ user: userId });
  if (!shoppingList) {
    const newShoppingList = new ShoppingList({ user: userId, ingredients: [ingredientId] });
    return newShoppingList.save();
  }
  shoppingList.ingredients.push(ingredientId);
  return shoppingList.save();
};

// Usuwanie składnika z listy zakupów użytkownika
const removeFromShoppingList = async (userId, ingredientId) => {
  console.log('Removing ingredient from the shopping list:', userId, ingredientId);
  return ShoppingList.findOneAndUpdate(
    { user: userId },
    { $pull: { ingredients: ingredientId } },
    { new: true }
  );
};

// Pobieranie składników z listy zakupów użytkownika
const getShoppingList = async (userId) => {
  console.log('Getting shopping list for user:', userId);
  return ShoppingList.findOne({ user: userId }).populate('ingredients');
};

console.log('ShoppingList service initialized.');
module.exports = {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
};
