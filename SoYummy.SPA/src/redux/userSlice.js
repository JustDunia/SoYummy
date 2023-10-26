import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  theme: 'light',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload;
    },
    clearUser: state => {
      state.token = '';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default userSlice;
export const { setUser, clearUser, setTheme } = userSlice.actions;