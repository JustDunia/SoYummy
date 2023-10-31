import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/recipes");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  async (recipe, thunkAPI) => {
    const { name, number } = recipe;
    try {
      const response = await axios.post("/recipes", { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
