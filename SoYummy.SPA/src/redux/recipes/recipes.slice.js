import { createSlice } from "@reduxjs/toolkit";
import {
  getRecipesCategories,
  getRecipesMainPage,
  getRecipesPopular,
  getRecipesByCategory,
  getRecipe,
} from "./recipes.operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    categories: [],
    recipesMain: [],
    popularRecipes: [],
    recipesByCategory: {},
    recipe: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // CATEGORIES
    [getRecipesCategories.pending]: handlePending,
    [getRecipesCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    },
    [getRecipesCategories.rejected]: handleRejected,

    // MAIN PAGE
    [getRecipesMainPage.pending]: handlePending,
    [getRecipesMainPage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipesMain = action.payload;
    },
    [getRecipesMainPage.rejected]: handleRejected,

    // POPULAR
    [getRecipesPopular.pending]: handlePending,
    [getRecipesPopular.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.popularRecipes = action.payload;
    },
    [getRecipesPopular.rejected]: handleRejected,

    // BY CATEGORY
    [getRecipesByCategory.pending]: handlePending,
    [getRecipesByCategory.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipesByCategory = action.payload;
    },
    [getRecipesByCategory.rejected]: handleRejected,

    // ONE RECIPE
    [getRecipe.pending]: handlePending,
    [getRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipe = action.payload;
    },
    [getRecipe.rejected]: handleRejected,
  },
});

export const recipesReducer = recipesSlice.reducer;
