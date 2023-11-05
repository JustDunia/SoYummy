import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./auth/auth.slice";
import { recipesReducer } from "./recipes/recipes.slice";
import { favoriteReducer } from "./favorite/favorite.slice";
import { searchReducer } from "./search/search.slice";
import { ownRecipesReducer } from "./ownRecipes/ownRecipes.slice";
import { ingredientsReducer } from "./ingredients/ingredients.slice";
// import { shoppingListReducer } from "./shoppingList/shoppingList.slice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    recipes: recipesReducer,
    favorite: favoriteReducer,
    search: searchReducer,
    own: ownRecipesReducer,
    ingredients: ingredientsReducer,
    // shoppingList: shoppingListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// werjsa Ani:
//import { configureStore } from '@reduxjs/toolkit'
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import { recipesReducer } from './recipes/recipesSlice'
// import { filterReducer } from './recipes/filterSlice'
// import { authReducer } from './auth/authSlice'

// const persistConfig = {
// 	key: 'auth',
// 	storage,
// 	whitelist: ['token'],
// }

// export const store = configureStore({
// 	reducer: {
// 		recipies: recipesReducer,
// 		filter: filterReducer,
// 		auth: persistReducer(persistConfig, authReducer),
// 	},
// 	middleware: getDefaultMiddleware =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// })

// export const persistor = persistStore(store)
