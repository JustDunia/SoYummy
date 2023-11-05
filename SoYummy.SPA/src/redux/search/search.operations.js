import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000";

export const searchRecipes = createAsyncThunk(
  "recipes/search",
  async ({ keyword }, thunkAPI) => {
    try {
      const res = await axios.get(`/search?keyword=${keyword}`);
      console.log("RECIPES BY CATEGORY", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
