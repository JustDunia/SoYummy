import css from './IngredientsList.module.css'
import Ingredient from '../Ingredient/Ingredient'

import { useSelector } from 'react-redux'
import { selectRecipe } from '../../../../redux/recipes/recipes.selectors'

const IngredientsList = () => {
	const recipe = useSelector(selectRecipe)
	const ingredients = recipe.ingredients
	return (
		<div className={css.ingredientsList}>
			<div className={css.listHeader}>
				<p>Ingredients</p>
				<div className={css.listHeaderRight}>
					<p>Number</p>
					<p>Add to list</p>
				</div>
			</div>
			{ingredients &&
				ingredients.map(ingredient => (
					<Ingredient key={ingredient.id._id} ingredient={ingredient} />
				))}
		</div>
	)
}

export default IngredientsList
