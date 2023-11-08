import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  getFavorite,
  removeFromFavorites,
} from "./favorite.operations";

const initialState = {
  favoriteRecipes: [],
  isLoading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteRecipes.push(action.payload);
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(removeFromFavorites.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteRecipes = state.favoriteRecipes.filter(
          (recipe) => recipe.id !== action.payload
        );
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(getFavorite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoriteRecipes = action.payload.favorites;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;
