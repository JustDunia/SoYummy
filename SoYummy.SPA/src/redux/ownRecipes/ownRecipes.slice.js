import { createSlice } from "@reduxjs/toolkit";
import {
  addOwnRecipe,
  removeOwnRecipe,
  getOwnRecipe,
} from "./ownRecipes.operations";

const initialState = {
  ownRecipes: [],
  isLoading: false,
  error: null,
};

const ownRecipesSlice = createSlice({
  name: "ownRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOwnRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownRecipes = action.payload;
      })
      .addCase(addOwnRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(removeOwnRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.ownRecipes = state.ownRecipes.filter(
        //   (recipe) => recipe.id !== action.payload
        // );
      })
      .addCase(removeOwnRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(getOwnRecipe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOwnRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ownRecipes = action.payload.recipes;
      })
      .addCase(getOwnRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const ownRecipesReducer = ownRecipesSlice.reducer;
