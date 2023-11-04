const ingredientService = require("../service/ingredientService");

async function getIngredientList(req, res) {
  try {
    const ingredients = await ingredientService.getIngredientList();
    res.json(ingredients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function searchRecipesByIngredient(req, res) {
  const { ingredientName } = req.query;

  try {
    if (!ingredientName) {
      return res.status(400).json({ error: "Ingredient name is required" });
    }

    const recipes = await ingredientService.searchRecipesByIngredient(ingredientName);
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getIngredientList,
  searchRecipesByIngredient,
};
