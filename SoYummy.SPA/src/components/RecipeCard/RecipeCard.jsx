import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import css from "./RecipeCard.module.css";
import { removeFromFavorites } from "../../redux/favorite/favorite.operations";

export const RecipeCard = (props) => {
  const { img, preview, title, description, time, recipeId, remove } = props;

  return (
    <div className={css.wrapper}>
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
            <div className={css.spacerTop}>
              <h3 className={css.recipeTitle}>{title}</h3>
              <button onClick={remove} className={css.trashButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M14.6667 5.49998V4.76665C14.6667 3.73988 14.6667 3.2265 14.4668 2.83433C14.2911 2.48937 14.0106 2.2089 13.6656 2.03313C13.2735 1.83331 12.7601 1.83331 11.7333 1.83331H10.2667C9.2399 1.83331 8.72652 1.83331 8.33435 2.03313C7.98939 2.2089 7.70892 2.48937 7.53315 2.83433C7.33333 3.2265 7.33333 3.73988 7.33333 4.76665V5.49998M9.16667 10.5416V15.125M12.8333 10.5416V15.125M2.75 5.49998H19.25M17.4167 5.49998V15.7666C17.4167 17.3068 17.4167 18.0769 17.1169 18.6651C16.8533 19.1826 16.4326 19.6033 15.9151 19.8669C15.3269 20.1666 14.5568 20.1666 13.0167 20.1666H8.98333C7.44319 20.1666 6.67312 20.1666 6.08486 19.8669C5.56741 19.6033 5.14672 19.1826 4.88307 18.6651C4.58333 18.0769 4.58333 17.3068 4.58333 15.7666V5.49998"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className={css.recipeText}>{description}</p>
          </div>

          <div className={css.spacerBottom}>
            <p className={css.recipeTextTime}>{time} min</p>
            <Link to={`/recipe/${recipeId}`}>
              <button className={css.recipeButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="87"
                  height="27"
                  viewBox="0 0 138 45"
                  fill="#8BAA36"
                >
                  <path d="M0 15C0 6.71573 6.71573 0 15 0H108C124.569 0 138 13.4315 138 30C138 38.2843 131.284 45 123 45H30C13.4315 45 0 31.5685 0 15Z" />
                  <text
                    x="50%"
                    y="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    fill="#FAFAFA"
                    font-family="Poppins"
                    font-size="14"
                    font-weight="400"
                  >
                    See recipe
                  </text>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default RecipeCard;
