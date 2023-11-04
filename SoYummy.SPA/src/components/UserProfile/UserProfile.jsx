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

import { searchRecipes } from "../../redux/search/search.operations";

export const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  //   const [userData, setUserData] = useState(null);

  const handleButtonClick = () => {
    console.log("USER", user);
  };

  const handleRecipes = () => dispatch(getRecipesCategories());
  const handleMain = () => dispatch(getRecipesMainPage());
  const handlePopular = () => dispatch(getRecipesPopular());
  const handleCategory = () =>
    dispatch(getRecipesByCategory({ category: "Side", page: 2 }));

  let id = "640cd5ac2d9fecf12e889838";

  const handleOne = () => dispatch(getRecipe(id));

  const inputRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchRecipes({ keyword: inputRef.current.value }));
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        Wyświetl dane użytkownika w konsoli{" "}
      </button>
      <button onClick={handleRecipes}>Wyświetl kategorie przepisów</button>
      <button onClick={handleMain}>Wyświetl przepisy Main</button>
      <button onClick={handlePopular}>Wyświetl przepisy Popualar</button>
      <button onClick={handleCategory}>Wyświetl przepisy po kategorii</button>
      <button onClick={handleOne}>Wyświetl jeden przepis</button>
      <form onSubmit={handleSearch}>
        <input type="text" ref={inputRef} placeholder="Wyszukaj przepisy..." />
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
};
