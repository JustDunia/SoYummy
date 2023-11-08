import { createSlice } from "@reduxjs/toolkit";
import { searchRecipes } from "./search.operations";

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        console.log("SEARCH FULLFIELD");
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(searchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const searchReducer = searchSlice.reducer;
