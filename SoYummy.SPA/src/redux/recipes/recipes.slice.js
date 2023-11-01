import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, addRecipe, deleteRecipe } from "./recipes.operations";

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
    recipes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchRecipes.pending]: handlePending,
    [fetchRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    },
    [fetchRecipes.rejected]: handleRejected,

    [addRecipe.pending]: handlePending,
    [addRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes.push(action.payload);
    },
    [addRecipe.rejected]: handleRejected,

    [deleteRecipe.pending]: handlePending,
    [deleteRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.recipes.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      state.recipes.splice(index, 1);
    },
    [deleteRecipe.rejected]: handleRejected,
  },
});

export const recipesReducer = recipesSlice.reducer;
