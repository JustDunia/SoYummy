import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserId } from "../auth/auth.selectors";

axios.defaults.baseURL = "http://localhost:3000";

const setAuthHeader = (token) => {
  console.log("Setting auth header with token:", token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  console.log("TRYING CLER HEADERS");
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (registerData, thunkAPI) => {
    try {
      console.log("REGISTER DATA", registerData);
      const res = await axios.post("/auth/register", registerData);
      // po rejstracji użytkownik odrazu zalaogowany do dodania lub nie ? Chyba logika powinna być
      // najpierw restracja -> mail z potwierdzeniem konta -> logowanie
      // setAuthHeader(res.data.token);
      console.log("RES SERVER DATA", res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const auth = state.auth;
      console.log("LOGIN STATE", auth);

      const res = await axios.post("/auth/login", loginData);
      setAuthHeader(res.data.user.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const userId = selectUserId(state);
  try {
    console.log("TRYING LOG OUT");
    await axios.post("/auth/logout", userId);
    clearAuthHeader();
    console.log("USER LOGGED OUT");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const currentUser = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      console.log("Token not found");
      return thunkAPI.rejectWithValue("Unable to fetch User");
    }

    setAuthHeader(token);

    try {
      const res = await axios.get("/auth/current");
      console.log("RES SERVER CURRENT DATA", res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscription = createAsyncThunk(
  "auth/subscription",
  async (_, thunkAPI) => {
    try {
      const res = await axios.patch("/auth/subscribe");
      console.log("RES SERVER SUBSCRIPTION DATA", res.data);
      const state = thunkAPI.getState();
      const auth = state.auth;
      console.log("SUBSCRIPTION STATE", auth);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
