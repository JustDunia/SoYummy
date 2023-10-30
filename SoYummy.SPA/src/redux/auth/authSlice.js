import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './actions';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload.message;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;

      console.log('TOKEN REGISTER', state.token);
      console.log('STATE REGISTER', state);
    },
    [register.rejected]: handleRejected,

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;

      console.log('TOKEN LOGIN', state.token);
      console.log('STATE LOGIN', state);
    },
    [logIn.rejected]: handleRejected,

    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: handleRejected,

    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
