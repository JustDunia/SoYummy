import { createSelector } from "@reduxjs/toolkit";

export const selectRecipes = (state) => state.recipes.recipes;
export const selectFilter = (state) => state.filter;
export const selectIsLoading = (state) => state.recipes.isLoading;
export const selectError = (state) => state.recipes.error;

export const selectFilteredRecipes = createSelector(
  [selectRecipes, selectFilter],
  (recipes, filter) => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
