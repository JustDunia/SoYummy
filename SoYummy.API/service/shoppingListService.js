const ShoppingList = require('../models/shoppingList');

// Dodawanie składnika do listy zakupów użytkownika
async function addToShoppingList(userId, ingredientId) {
  const shoppingList = await ShoppingList.findOne({ user: userId });
  if (!shoppingList) {
    const newShoppingList = new ShoppingList({ user: userId, ingredients: [ingredientId] });
    return newShoppingList.save();
  }
  shoppingList.ingredients.push(ingredientId);
  return shoppingList.save();
}

// Usuwanie składnika z listy zakupów użytkownika
async function removeFromShoppingList(userId, ingredientId) {
  return ShoppingList.findOneAndUpdate(
    { user: userId },
    { $pull: { ingredients: ingredientId } },
    { new: true }
  );
}

// Pobieranie składników z listy zakupów użytkownika
async function getShoppingList(userId) {
  return ShoppingList.findOne({ user: userId }).populate('ingredients');
}

module.exports = {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
};
