// import css from './RecipeCard.module.css'
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { img, title, description, time, remove, id } = props;
  return (
    <div className={css.recipeBox}>
      <img src={img} className={css.recipeFoto} />
      <div className={css.recipeDescription}>
        <div className={css.spacer}>
          <h3>{title}</h3>
          <button onClick={remove}>Remove</button>
        </div>
        <p className={css.recipeText}>{description}</p>
        <div>
          <p>{time}</p>
          <Link to="/target-path">
            <button className={css.recipeButton}>See recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
