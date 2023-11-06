import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000";

export const getIngredientList = createAsyncThunk(
  "ingredients/list",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/ingredients/list");
      console.log("INGREDIENTS:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const searchRecipesByIngredient = createAsyncThunk(
  "ingredients/recipes",
  async (ingredientName, thunkAPI) => {
    try {
      const res = await axios.get(
        `/ingredients?ingredientName=${ingredientName}`
      );
      console.log("RECIPES BY INGREDIENT", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
