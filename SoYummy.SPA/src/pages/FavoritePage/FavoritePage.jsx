import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { RecipesContainer } from "../../components/RecipesContainer/RecipesContainer";
import { getFavorite } from "../../redux/favorite/favorite.operations";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    dispatch(getFavorite())
      .unwrap()
      .then((response) => {
        // Przypuszczam, że odpowiedź zawiera pole z ulubionymi przepisami
        // Jeśli struktura odpowiedzi jest inna, dostosuj to
        setFavoriteRecipes(response.favorites);
      })
      .catch((error) => {
        // Obsłuż błąd tutaj, jeśli potrzebujesz
        console.error("Error fetching favorite recipes:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <RecipesContainer recipes={favoriteRecipes} />
      {/* PAGINACJA */}
    </div>
  );
};

export default FavoritePage;
