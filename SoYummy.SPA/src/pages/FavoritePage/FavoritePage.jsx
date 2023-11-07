import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../redux/auth/auth.selectors";
import { selectFavoriteRecipes } from "../../redux/favorite/favorite.selectors"; // Załóżmy, że taki selektor istnieje

import { RecipesContainer } from "../../components/RecipesContainer/RecipesContainer";
import { getFavorite } from "../../redux/favorite/favorite.operations";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const favoriteRecipes = useSelector(selectFavoriteRecipes); // Pobierz ulubione przepisy za pomocą selektora

  useEffect(() => {
    if (userId) {
      dispatch(getFavorite(userId));
    }
  }, [dispatch, userId]); // Dodaj userId jako zależność useEffect

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <RecipesContainer recipes={favoriteRecipes} />
      {/* PAGINACJA */}
    </div>
  );
};

export default FavoritePage;
