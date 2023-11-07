import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  currentUser,
  subscription,
} from "./auth.operations";

const initialState = {
  user: { username: null, email: null, userId: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.error = action.payload.message;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(currentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user.username = action.payload.username;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(subscription.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(subscription.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.isSubscriber = action.payload.userData.isSubscriber;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(subscription.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
