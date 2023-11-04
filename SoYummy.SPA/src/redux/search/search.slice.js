import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes } from "./search.operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const searchSlice = createSlice({
  name: "search",
  initialState: {
    recipes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [searchRecipes.pending]: handlePending,
    [searchRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    },
    [searchRecipes.rejected]: handleRejected,
  },
});

export const searchReducer = searchSlice.reducer;
