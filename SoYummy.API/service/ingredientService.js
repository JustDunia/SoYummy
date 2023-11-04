const Ingredient = require("../models/ingredient");

// Pobierz listę składników
async function getIngredientList() {
  return Ingredient.find({}, "ttl desc t thb").exec();
}

// Wyszukaj przepisy po nazwie składnika
async function searchRecipesByIngredient(ingredientName) {
  if (!ingredientName) {
    throw new Error("Ingredient name is required");
  }

  return Ingredient.find(
    { ttl: new RegExp(ingredientName, "i") },
    "ttl desc t thb"
  ).exec();
}

module.exports = {
  getIngredientList,
  searchRecipesByIngredient,
};
