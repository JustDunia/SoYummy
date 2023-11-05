import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserId } from "../auth/auth.selectors";

axios.defaults.baseURL = "http://localhost:3000";

export const addToShoppingList = createAsyncThunk(
  "shopping-list/add",
  async ({ ingredientId, measure }, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);

    try {
      const res = await axios.post(`/shopping-list/add`, {
        ingredientId,
        measure,
      });
      console.log("ADDED TO SHOPPING LIST:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromShoppingList = createAsyncThunk(
  "shopping-list/remove",
  async (ingredientId, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);
    try {
      const res = await axios.delete(`/shopping-list/remove`, ingredientId);
      console.log("REMOVED INGIDIENT:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getShoppingList = createAsyncThunk(
  "ownRecipes/get",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);

    try {
      const res = await axios.get(`/shopping-list/${userId}`);
      console.log("USERS SHOPPING-LIST:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
