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

export const getRecipesMainPage = createAsyncThunk(
  "recipes/mainPage",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/recipes/main-page");
      console.log("RECIPES MAIN PAGE:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getRecipesPopular = createAsyncThunk(
  "recipes/popular",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/recipes/popular-recipes");
      console.log("RECIPES POPULAR:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getRecipesByCategory = createAsyncThunk(
  "recipes/recipesByCategory",
  async ({ category, page }, thunkAPI) => {
    try {
      const res = await axios.get(`/recipes/${category}?page=${page}`);
      console.log("RECIPES BY CATEGORY", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getRecipe = createAsyncThunk(
  "recipes/oneRecipe",
  async (id, thunkAPI) => {
    try {
      // coś dziwnie ścieżka na backendzie zdefiniowana ?

      const res = await axios.get(`/recipes/id/${id}`);
      console.log("RECIPES ONE PECIPE:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
