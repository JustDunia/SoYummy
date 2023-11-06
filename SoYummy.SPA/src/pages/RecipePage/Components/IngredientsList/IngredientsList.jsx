import css from './IngredientsList.module.css'
import Ingredient from '../Ingredient/Ingredient'

const IngredientsList = () => {
	return (
		<div className={css.ingredientsList}>
			<div className={css.listHeader}>
				<p>Ingredients</p>
				<div className={css.listHeaderRight}> 
          <p>Number</p>
          <p>Add to list</p>
        </div>
			</div>
			<Ingredient />
		</div>
	)
}

export default IngredientsList
