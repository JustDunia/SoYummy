import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { selectUserId } from "../../redux/auth/auth.selectors";
import {
  getOwnRecipe,
  removeOwnRecipe,
} from "../../redux/ownRecipes/ownRecipes.operations";

import { RecipesContainer } from "../../components/RecipesContainer/RecipesContainer";
import { selectOwnRecipes } from "../../redux/ownRecipes/ownRecipes.selectors";
import css from "./MyRecipesPage.module.css";

const MyRecipesPage = () => {
  const dispatch = useDispatch(getOwnRecipe);

  useEffect(() => {
    dispatch(selectOwnRecipes());
  }, [dispatch]);

  const handleRemoveFav = (e) => {
    e.preventDefault;
    dispatch(removeOwnRecipe(recipeId));
  };

  const myRecipes = useSelector(selectOwnRecipes).slice(0, 8);
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
    <div className={css.pageWrapper}>
      <div>
        <h2 className={css.pageTitle}>My recipies</h2>
        <RecipesContainer recipes={myRecipes} remove={handleRemoveFav} />
        {/* PAGINACJA */}
      </div>
    </div>
  );
};

export default MyRecipesPage;
