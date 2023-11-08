import { createSlice } from "@reduxjs/toolkit";
import {
  getIngredientList,
  searchRecipesByIngredient,
} from "./ingredients.operations";

const initialState = {
  ingredientList: [],
  recipesByIngredient: [],
  isLoading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredientList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredientList = action.payload;
      })
      .addCase(getIngredientList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(searchRecipesByIngredient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchRecipesByIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesByIngredient = action.payload;
      })
      .addCase(searchRecipesByIngredient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
