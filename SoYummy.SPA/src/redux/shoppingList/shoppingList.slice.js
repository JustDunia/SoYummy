import { createSlice } from "@reduxjs/toolkit";
import {
  addToShoppingList,
  removeFromShoppingList,
  getShoppingList,
} from "./shoppingList.operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState: {
    shoppingList: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addToShoppingList.pending]: handlePending,
    [addToShoppingList.fulfilled](state, action) {
      console.log("ADD FULLFIELD");
      state.isLoading = false;
      state.error = null;
    },
    [addToShoppingList.rejected]: handleRejected,

    [removeFromShoppingList.pending]: handlePending,
    [removeFromShoppingList.fulfilled](state, action) {
      console.log("REMOVED FULLFIELD");
      state.isLoading = false;
      state.error = null;
    },
    [removeFromShoppingList.rejected]: handleRejected,

    [getShoppingList.pending]: handlePending,
    [getShoppingList.fulfilled](state, action) {
      console.log("ACTION PAYLOAD", action.payload);
      state.isLoading = false;
      state.error = null;
      state.shoppingList = action.payload;
      console.log("AFTER STATE UPDATE", state.favoriteRecipes);
    },
    [getShoppingList.rejected]: handleRejected,
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
