const ShoppingList = require('../models/shoppingList');

// Dodawanie składnika do listy zakupów użytkownika
async function addToShoppingList(userId, ingredientId) {
  console.log('Adding ingredient to the shopping list:', userId, ingredientId); // Dodaj tę linię
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
  console.log('Removing ingredient from the shopping list:', userId, ingredientId); // Dodaj tę linię
  return ShoppingList.findOneAndUpdate(
    { user: userId },
    { $pull: { ingredients: ingredientId } },
    { new: true }
  );
}

// Pobieranie składników z listy zakupów użytkownika
async function getShoppingList(userId) {
  console.log('Getting shopping list for user:', userId); // Dodaj tę linię
  return ShoppingList.findOne({ user: userId }).populate('ingredients');
}

console.log('ShoppingList service initialized.'); // Dodaj tę linię

module.exports = {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
};
