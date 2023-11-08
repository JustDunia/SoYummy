import css from "./RecipesContainer.module.css";
import { useDispatch } from "react-redux";

import { RecipeCard } from "../RecipeCard/RecipeCard";

export const RecipesContainer = ({ recipes }, remove) => {
  if (!recipes || !recipes.length) {
    return <div>No recipes available.</div>;
  }

  return (
    <div className={css.recipesContainer}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          img={recipe.thumb}
          preview={recipe.preview}
          title={recipe.title}
          description={recipe.description}
          time={recipe.time}
          recipeId={recipe._id}
          remove={remove}
        />
      ))}
    </div>
  );
};
