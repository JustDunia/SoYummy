import css from './CategoryExamples.module.css'
import RecipePreviewBox from '../../../../components/RecipePreviewBox/RecipePreviewBox'
import SeeAllButton from '../SeeAllButton/SeeAllButton'
import { useSelector } from 'react-redux'
import { selectRecipesMainPage } from '../../../../redux/recipes/recipes.selectors'
import { getRecipe } from '../../../../redux/recipes/recipes.operations'
import { useNavigate } from 'react-router-dom'

const CategoryExamples = ({ category }) => {
	const navigate = useNavigate()

	const recipes = useSelector(selectRecipesMainPage)
	const recipesForCategory = recipes[category]
	const handleClick = id => {
		navigate(`/recipe/${id}`)
	}
	return (
		<>
			<h2 className={css.categoryName}>{category}</h2>
			<div className={css.categoryExamples}>
				{recipesForCategory &&
					recipesForCategory.map(({ _id, preview, title }) => (
						<RecipePreviewBox
							key={_id}
							img={preview}
							productName={title}
							onClick={() => handleClick(_id)}
						/>
					))}
			</div>
			<SeeAllButton onClick={() => console.log('go to ', category)} />
		</>
	)
}

export default CategoryExamples
