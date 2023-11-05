import { createSlice } from "@reduxjs/toolkit";
import {
  getIngredientList,
  searchRecipesByIngredient,
} from "./ingredients.operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    ingredientList: [],
    recipesByIngredient: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getIngredientList.pending]: handlePending,
    [getIngredientList.fulfilled](state, action) {
      console.log("ingedients FULLFIELD");
      state.isLoading = false;
      state.error = null;
      state.ingredientList = action.payload;
    },
    [getIngredientList.rejected]: handleRejected,

    [searchRecipesByIngredient.pending]: handlePending,
    [searchRecipesByIngredient.fulfilled](state, action) {
      console.log("RecipesByIngredient FULLFIELD");
      state.isLoading = false;
      state.error = null;
      state.recipesByIngredient = action.payload;
    },
    [searchRecipesByIngredient.rejected]: handleRejected,
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
