import css from './Preparation.module.css'
import { useSelector } from 'react-redux'
import {
	selectRecipe,
	selectPreparationInstructions,
} from '../../../../redux/recipes/recipes.selectors'

const Preparation = () => {
	const recipe = useSelector(selectRecipe)
	const instructions = useSelector(selectPreparationInstructions)
	const steps = instructions && instructions.split('.')
	steps && steps.length > 0 && steps.pop()

	return (
		<div className={css.preparationContainer}>
			<div>
			<h2 className={css.preparationHeader}>Recipe Preparation</h2>
				<ul>
					{steps &&
						steps.map((step, index) => (
							<li className={css.step}>
								<span className={css.number}>{index + 1}</span>
								{step}.
							</li>
						))}
				</ul>
			</div>
			<img src={recipe.thumb} alt={recipe.title} className={css.thumb} />
		</div>
	)
}

export default Preparation
