import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserId } from "../auth/auth.selectors";

axios.defaults.baseURL = "http://localhost:3000";

export const addToFavorites = createAsyncThunk(
  "favorite/add",
  async (recipeId, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);

    try {
      const res = await axios.put(`/favorite/${recipeId}`);
      console.log("ADD FAVORITE:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "favorite/remove",
  async (recipeId, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);
    try {
      const res = await axios.patch(`/favorite/${recipeId}`);
      console.log("RECIPES CATEGORY LIST:", res.data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFavorite = createAsyncThunk(
  "favorite/get",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = selectUserId(state);
    console.log("USER ID FROM FAV", userId);

    try {
      const res = await axios.get("/favorite");
      console.log("GET FAVORITE:", res.data.favorites);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const getFavorite = createAsyncThunk(
//   "favorite/get",
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const userId = selectUserId(state);
//     console.log("USER ID", userId);

//     if (!userId) {
//       return thunkAPI.rejectWithValue("User ID is not available.");
//     }

//     try {
//       // Przykład, jeśli `userId` jest wymagane w URL
//       const res = await axios.get(`/favorite/${userId}`);
//       console.log("GET FAVORITE:", res.data.favorites);
//       return res.data.favorites; // upewnij się, że zwracasz właściwą część odpowiedzi
//     } catch (e) {
//       console.error("Error fetching favorites:", e.message);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
