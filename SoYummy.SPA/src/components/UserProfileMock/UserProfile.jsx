import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { currentUser } from "../../redux/auth/auth.operations";
import { selectUser } from "../../redux/auth/auth.selectors";
import {
  getRecipesCategories,
  getRecipesMainPage,
  getRecipesPopular,
  getRecipesByCategory,
  getRecipe,
} from "../../redux/recipes/recipes.operations";

import {
  addToFavorites,
  getFavorite,
  removeFromFavorites,
} from "../../redux/favorite/favorite.operations";

import { searchRecipes } from "../../redux/search/search.operations";

import {
  addOwnRecipe,
  removeOwnRecipe,
  getOwnRecipe,
} from "../../redux/ownRecipes/ownRecipes.operations";

import {
  getIngredientList,
  searchRecipesByIngredient,
} from "../../redux/ingredients/ingredients.operations";

export const UserProfile = () => {
  let id = "640cd5ac2d9fecf12e8897f9";

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // USER:
  const handleUserData = () => {
    console.log("USER", user);
  };
  // RECIPES:
  const handleRecipes = () => dispatch(getRecipesCategories());
  const handleMain = () => dispatch(getRecipesMainPage());
  const handlePopular = () => dispatch(getRecipesPopular());
  const handleCategory = () =>
    dispatch(getRecipesByCategory({ category: "Side", page: 2 }));

  const handleOne = () => dispatch(getRecipe(id));
  // SEARCH:
  const inputRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRecipes({ keyword: inputRef.current.value }));
  };
  // FAVORITE:
  const handleAddFavorite = (e) => {
    e.preventDefault();
    dispatch(addToFavorites(id));
  };

  const handleGetFavorite = (e) => {
    console.log("BEFORE GET FAVORITE");
    e.preventDefault();
    dispatch(getFavorite());
    console.log("AFTER GET FAVORITE");
  };

  const recipeId = "640cd5ac2d9fecf12e8897ee";

  const handleRemove = (e) => {
    e.preventDefault;
    dispatch(removeFromFavorites(recipeId));
  };

  // OWN:

  const ownRecipe = {
    title: "Poniat recipe 10",
    category: "Beef",
    instructions: "Get some recipe from web",
    description: "Get some recipe from web",
    preview: "none",
    time: "50",
    ingredients: [
      {
        id: {
          _id: "640c2dd963a319ea671e36f4",
          ttl: "Green Red Lentils",
          desc: "A type of lentil with a mild, nutty flavor and a greenish-brown color often used in soups, stews, and curries.",
          t: "",
          thb: "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564799/fspumrzs331iyjricvcm.png",
        },
        measure: "1 cups",
      },
    ],
    owner: "6542851a85d31a35564cab7a",
  };

  const handleOwnAdd = (e) => {
    e.preventDefault();
    dispatch(addOwnRecipe(ownRecipe));
  };

  const handleOwnGet = (e) => {
    e.preventDefault();
    dispatch(getOwnRecipe());
  };

  const idRemove = "6547df9063f6f0be22b0afe7";

  const handleOwnRemove = (e) => {
    e.preventDefault;
    dispatch(removeOwnRecipe(idRemove));
  };

  // INGREDIENTS

  const handeleIngredients = () => dispatch(getIngredientList());

  const handleSearchByIngredient = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    dispatch(searchRecipesByIngredient(query));
    console.log(query);
  };

  return (
    <div>
      <button onClick={handleUserData}>
        Wyświetl dane użytkownika w konsoli{" "}
      </button>
      <button onClick={handleRecipes}>Wyświetl kategorie przepisów</button>
      <button onClick={handleMain}>Wyświetl przepisy Main</button>
      <button onClick={handlePopular}>Wyświetl przepisy Popualar</button>
      <button onClick={handleCategory}>Wyświetl przepisy po kategorii</button>
      <button onClick={handleOne}>Wyświetl jeden przepis</button>

      <button onClick={handleAddFavorite}>Dodaj do favorite</button>
      <button onClick={handleGetFavorite}>Pobież Favorite</button>
      <button onClick={handleRemove}>Remove Favorite</button>

      <button onClick={handleOwnAdd}>Dodaj do own</button>
      <button onClick={handleOwnGet}>Pobież own recipes</button>
      <button onClick={handleOwnRemove}>Remove own recipe</button>

      <button onClick={handeleIngredients}>Get ingredients</button>
      <form onSubmit={handleSearch}>
        <input type="text" ref={inputRef} placeholder="Wyszukaj przepisy..." />
        <button type="submit">Szukaj</button>
      </form>

      <form onSubmit={handleSearchByIngredient}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Wyszukaj po składniku..."
        />
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
};
