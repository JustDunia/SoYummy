import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../redux/auth/auth.selectors";
import { selectFavoriteRecipes } from "../../redux/favorite/favorite.selectors";

import { RecipesContainer } from "../../components/RecipesContainer/RecipesContainer";
import { getFavorite } from "../../redux/favorite/favorite.operations";
import { selectRecipesPopular } from "../../redux/recipes/recipes.selectors";
import { getRecipesPopular } from "../../redux/recipes/recipes.operations";

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesPopular());
  }, [dispatch]);

  // DO PODMIANKI NA FAVORITE
  // useEffect(() => {
  //   dispatch(getFavorite());
  // }, [dispatch]);

  const favoriteRecipes = useSelector(selectRecipesPopular).slice(0, 8);
  // DO PODMIANKI NA FAVORITE
  // const favoriteRecipes = useSelector(selectFavoriteRecipes);

  // zalążek paginacji:
  // const usePagination = (items, itemsPerPage) => {
  //   const [currentPage, setCurrentPage] = React.useState(1);
  //   const [totalPages, setTotalPages] = React.useState(0);

  //   useEffect(() => {
  //     if (items) {
  //       setTotalPages(Math.ceil(items.length / itemsPerPage));
  //     }
  //   }, [items, itemsPerPage]);

  //   const currentItems = React.useMemo(() => {
  //     const start = (currentPage - 1) * itemsPerPage;
  //     const end = start + itemsPerPage;
  //     return items.slice(start, end);
  //   }, [currentPage, itemsPerPage, items]);

  //   return {
  //     setCurrentPage,
  //     currentItems,
  //     currentPage,
  //     totalPages,
  //   };
  // };

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <RecipesContainer recipes={favoriteRecipes} />
      {/* PAGINACJA */}
    </div>
  );
};

export default FavoritePage;
