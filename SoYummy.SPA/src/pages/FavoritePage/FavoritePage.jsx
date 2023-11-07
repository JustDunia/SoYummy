import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../redux/auth/auth.selectors";
import { selectFavoriteRecipes } from "../../redux/favorite/favorite.selectors";

import { RecipesContainer } from "../../components/RecipesContainer/RecipesContainer";
import { getFavorite } from "../../redux/favorite/favorite.operations";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const favoriteRecipes = useSelector(selectFavoriteRecipes);

  useEffect(() => {
    if (userId) {
      dispatch(getFavorite());
    }

    // console.log("FAVORITE USER ID", userId);
  }, [dispatch, userId]);

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <RecipesContainer recipes={favoriteRecipes} />
      {/* PAGINACJA */}
    </div>
  );
};

export default FavoritePage;
