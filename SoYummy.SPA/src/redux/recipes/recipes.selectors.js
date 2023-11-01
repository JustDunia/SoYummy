import { createSelector } from "@reduxjs/toolkit";

export const selectRecipes = (state) => state.recipes;
export const selectOneRecipe = (state) => state.recipes._`${id}`;
export const selectFilter = (state) => state.filter;

export const selectFilteredRecipes = createSelector(
  [selectRecipes, selectFilter],
  (recipes, filter) => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
