import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../redux/auth/auth.selectors";
import { selectFavoriteRecipes } from "../../redux/favorite/favorite.selectors";

import { RecipesContainer } from "../../components/RecipesContainer/RecipesContainer";
import {
  getFavorite,
  removeFromFavorites,
} from "../../redux/favorite/favorite.operations";
import { selectRecipesPopular } from "../../redux/recipes/recipes.selectors";
import { getRecipesPopular } from "../../redux/recipes/recipes.operations";

import css from "./FavoritePage.module.css";

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesPopular());
  }, [dispatch]);

  // DO PODMIANKI NA FAVORITE
  // useEffect(() => {
  //   dispatch(getFavorite());
  // }, [dispatch]);

  const handleRemoveFav = (e) => {
    e.preventDefault;
    dispatch(removeFromFavorites(recipeId));
  };

  const favoriteRecipes = useSelector(selectRecipesPopular).slice(0, 8);

  return (
    <div className={css.pageWrapper}>
      <div>
        <h2 className={css.pageTitle}>Favorite Recipes</h2>
        <RecipesContainer recipes={favoriteRecipes} remove={handleRemoveFav} />
        {/* PAGINACJA */}
      </div>
    </div>
  );
};

export default FavoritePage;
