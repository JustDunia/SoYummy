const ShoppingList = require("../models/shoppingList");

// Dodawanie składnika do listy zakupów użytkownika
const addToShoppingList = async (userId, ingredientId, measure) => {
  console.log(
    "Adding ingredient to the shopping list:",
    userId,
    ingredientId,
    measure
  );
  const shoppingList = await ShoppingList.findOne({ user: userId });
  if (!shoppingList) {
    const newShoppingList = new ShoppingList({
      user: userId,
      ingredients: [{ ingredient: ingredientId, measure }],
    });
    return newShoppingList.save();
  }
  // Sprawdź, czy składnik już istnieje na liście
  const existingIngredient = shoppingList.ingredients.find(
    (item) => item.ingredient.toString() === ingredientId
  );
  if (existingIngredient) {
    // Składnik istnieje, zaktualizuj miarę
    existingIngredient.measure = measure;
    return shoppingList.save();
  } else {
    // Składnik nie istnieje, dodaj nowy z miarą
    shoppingList.ingredients.push({ ingredient: ingredientId, measure });
    return shoppingList.save();
  }
};

// Usuwanie składnika z listy zakupów użytkownika
const removeFromShoppingList = async (userId, ingredientId) => {
  console.log(
    "Removing ingredient from the shopping list:",
    userId,
    ingredientId
  );
  return ShoppingList.findOneAndUpdate(
    { user: userId },
    { $pull: { ingredients: { ingredient: ingredientId } } },
    { new: true }
  );
};

// Pobieranie składników z listy zakupów użytkownika
const getShoppingList = async (userId) => {
  console.log("Getting shopping list for user:", userId);
  const shoppingList = await ShoppingList.findOne({ user: userId });
  // Dodajemy obsługę pobierania miary składników
  const shoppingListWithMeasure = shoppingList.ingredients.map((item) => {
    // Wyszukaj miarę danego składnika w liście zakupów
    const measure = item.measure;
    return { ...item.toObject(), measure };
  });

  return shoppingListWithMeasure;
};

console.log("ShoppingList service initialized.");
module.exports = {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
};
