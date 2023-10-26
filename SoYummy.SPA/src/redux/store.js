import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import userSlice from './userSlice';

export const setToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

const persistConfig = {
  key: [userSlice.name],
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: {
    [userSlice.name]: persistedUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store, null, () => {
  const token = store.getState()?.user?.token ?? '';
  setToken(token);
});