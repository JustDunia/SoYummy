import { createSlice } from "@reduxjs/toolkit";
import {
  addOwnRecipe,
  removeOwnRecipe,
  getOwnRecipe,
} from "./ownRecipes.operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ownRecipesSlice = createSlice({
  name: "own",
  initialState: {
    ownRecipes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addOwnRecipe.pending]: handlePending,
    [addOwnRecipe.fulfilled](state, action) {
      console.log("ADD FULLFIELD");
      state.isLoading = false;
      state.error = null;
    },
    [addOwnRecipe.rejected]: handleRejected,

    [removeOwnRecipe.pending]: handlePending,
    [removeOwnRecipe.fulfilled](state, action) {
      console.log("REMOVED FULLFIELD");
      state.isLoading = false;
      state.error = null;
    },
    [removeOwnRecipe.rejected]: handleRejected,

    [getOwnRecipe.pending]: handlePending,
    [getOwnRecipe.fulfilled](state, action) {
      console.log("ACTION PAYLOAD", action.payload);
      state.isLoading = false;
      state.error = null;
      state.ownRecipes = action.payload.recipes;
      console.log("AFTER STATE UPDATE", state.favoriteRecipes);
    },
    [getOwnRecipe.rejected]: handleRejected,
  },
});

export const ownRecipesReducer = ownRecipesSlice.reducer;
