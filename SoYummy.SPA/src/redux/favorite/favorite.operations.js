import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000";

export const getRecipesCategories = createAsyncThunk(
  "recipes/categoryList",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/recipes/category-list");
      console.log("RECIPES CATEGORY LIST:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
