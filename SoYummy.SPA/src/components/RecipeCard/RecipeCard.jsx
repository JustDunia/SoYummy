import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import css from "./RecipeCard.module.css";
import { removeFromFavorites } from "../../redux/favorite/favorite.operations";
// import iconTrash from '../../images/commonSvgImg/icon-trash.svg'

export const RecipeCard = (props) => {
  const { img, preview, title, description, time, recipeId } = props;

  const dispatch = useDispatch();

  const handleRemoveRecipe = (e) => {
    e.preventDefault;
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <div className={css.recipeBox}>
      <img
        src={preview}
        srcSet={`${preview} 409w, ${img} 410w`}
        sizes="(max-width: 409px) 100vw, 410px"
        className={css.recipeFoto}
        alt={title}
      />
      <div className={css.recipeDescription}>
        <div>
          <div className={css.spacer}>
            <h3 className={css.recipeTitle}>{title}</h3>
            <button onClick={handleRemoveRecipe}>Remove</button>
          </div>
          <p className={css.recipeText}>{description}</p>
        </div>

        <div className={css.spacer}>
          <p className={css.recipeTextTime}>{time} min</p>
          <Link to={`/recipe/${recipeId}`}>
            <button className={css.recipeButton}>See recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// export default RecipeCard;
