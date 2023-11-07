// import css from "./RecipesContainer.module.css";
import { RecipeCard } from "../RecipeCard/RecipeCard";

export const RecipesContainer = ({ recipes }) => {
  if (!recipes || !recipes.length) {
    return <div>No recipes available.</div>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          img={recipe.thumb}
          preview={recipe.preview}
          title={recipe.title}
          description={recipe.description}
          time={recipe.time}
          recipeId={recipe._id}
        />
      ))}
    </div>
  );
};

// export default RecipesContainer;
