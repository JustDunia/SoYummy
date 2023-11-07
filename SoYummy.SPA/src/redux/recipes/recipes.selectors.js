export const selectRecipesCategories = state => state.recipes.categories
export const selectRecipesMainPage = state => state.recipes.recipesMain
export const selectRecipesPopular = state => state.recipes.popularRecipes
export const selectRecipesByCategory = state => state.recipes.recipesByCategory
export const selectRecipe = state => state.recipes.recipe
export const selectIsLoading = state => state.recipes.isLoading

export const selectPreparationInstructions = state => state.recipes.recipe.instructions

