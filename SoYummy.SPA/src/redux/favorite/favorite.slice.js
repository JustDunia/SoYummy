import { createSlice } from "@reduxjs/toolkit";
import {
  addToFavorites,
  getFavorite,
  removeFromFavorites,
} from "./favorite.operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteRecipes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addToFavorites.pending]: handlePending,
    [addToFavorites.fulfilled](state, action) {
      console.log("ADD FULLFIELD");
      state.isLoading = false;
      state.error = null;
    },
    [addToFavorites.rejected]: handleRejected,

    [removeFromFavorites.pending]: handlePending,
    [removeFromFavorites.fulfilled](state, action) {
      console.log("ADD FULLFIELD");
      state.isLoading = false;
      state.error = null;
    },
    [removeFromFavorites.rejected]: handleRejected,

    [getFavorite.pending]: handlePending,
    [getFavorite.fulfilled](state, action) {
      console.log("BEFORE STATE UPDATE", state.favoriteRecipes);
      console.log("ACTION PAYLOAD", action.payload);
      state.isLoading = false;
      state.error = null;
      state.favoriteRecipes = action.payload.favorites;
      console.log("AFTER STATE UPDATE", state.favoriteRecipes);
    },
    [getFavorite.rejected]: handleRejected,
  },
});

export const favoriteReducer = favoriteSlice.reducer;
