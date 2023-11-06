import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserId } from "../auth/auth.selectors";

axios.defaults.baseURL = "http://localhost:3000";

export const addOwnRecipe = createAsyncThunk(
  "ownRecipes/add",
  async (ownRecipe, thunkAPI) => {
    console.log("BEFORE ADD OWN");
    const state = thunkAPI.getState();
    const userId = selectUserId(state);

    try {
      console.log("BEFORE TRY ADD OWN");
      const res = await axios.post(`/ownRecipes`, ownRecipe);
      console.log("ADD OWN RECIPE:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeOwnRecipe = createAsyncThunk(
  "ownRecipes/remove",
  async (recipeId, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);
    try {
      console.log(
        `Sending PATCH request to /ownRecipes/${recipeId} for user ${userId}`
      );
      const res = await axios.delete(`/ownRecipes/${recipeId}`);
      console.log("REMOVE OWN RECIPE:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOwnRecipe = createAsyncThunk(
  "ownRecipes/get",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);

    try {
      const res = await axios.get("/ownRecipes");
      console.log("GET FAVORITE:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
