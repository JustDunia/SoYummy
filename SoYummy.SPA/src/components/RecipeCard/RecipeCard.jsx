import css from "./RecipeCard.module.css";

export const RecipeCard = (props) => {
  const { img, preview, title, description, time, recipeId } = props;

  const handleRemoveRecipe = (e) => {
    e.preventDefault;
    dispatch(removeFromFavorites(recipeId));
  };

  return (
    <div className={css.recipeBox}>
      <img src={img} className={css.recipeFoto} />
      <img src={preview} className={css.recipeFoto} />
      <div className={css.recipeDescription}>
        <div className={css.spacer}>
          <h3>{title}</h3>
          <button onClick={handleRemoveRecipe}>Remove</button>
        </div>
        <p className={css.recipeText}>{description}</p>
        <div>
          <p>{time}</p>
          <button className={css.recipeButton}>See recipe</button>
          {/* tutaj będzie trzeba dodać przekierowanie an str przepisu */}
        </div>
      </div>
    </div>
  );
};

// export default RecipeCard;
