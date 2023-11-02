import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  currentUser,
  subscription,
} from "./auth.operations";

const initialState = {
  user: { username: null, email: null, isSubscriber: false },
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
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: handleRejected,

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.user.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: handleRejected,

    [logOut.fulfilled](state, action) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: handleRejected,

    // spr logikę z api na refresh user

    [currentUser.pending](state) {
      state.isRefreshing = true;
    },
    [currentUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [currentUser.rejected](state) {
      state.isRefreshing = false;
    },

    [subscription.pending](state) {
      state.isRefreshing = true;
    },
    [subscription.fulfilled](state, action) {
      console.log(action.payload);
      state.user.isSubscriber = action.payload.userData.isSubscriber;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [subscription.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;

// KOD ANI
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   token: '',
//   theme: 'light',
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.token = action.payload;
//     },
//     clearUser: state => {
//       state.token = '';
//     },
//     setTheme: (state, action) => {
//       state.theme = action.payload;
//     },
//   },
// });

// export default userSlice;
// export const { setUser, clearUser, setTheme } = userSlice.actions;
