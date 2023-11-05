import { createSlice } from "@reduxjs/toolkit";
import { addToFavorites, getFavorite } from "./favorite.operations";

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
      state.isLoading = false;
      state.error = null;
      //   state.favorite = action.payload;
      //   state.favoriteRecipes = action.payload.favorites;
    },
    [addToFavorites.rejected]: handleRejected,
  },
  //   to jako ostatnie

  [getFavorite.pending]: handlePending,
  [getFavorite.fulfilled](state, action) {
    console.log("BEFORE STATE UPDATE", state.favoriteRecipes);
    console.log("ACTION PAYLOAD", action.payload);
    state.isLoading = false;
    state.error = null;
    state.favoriteRecipes = action.payload;
    console.log("AFTER STATE UPDATE", state.favoriteRecipes);
  },
  [getFavorite.rejected]: handleRejected,
});

export const favoriteReducer = favoriteSlice.reducer;
