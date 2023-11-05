import css from './CategoryExamples.module.css'
import RecipePreviewBox from '../../../../components/RecipePreviewBox/RecipePreviewBox'
import SeeAllButton from '../SeeAllButton/SeeAllButton'

import { useSelector } from 'react-redux'
import { selectRecipesMainPage } from '../../../../redux/recipes/recipes.selectors'

const CategoryExamples = props => {
	const { category } = props

	const recipes = useSelector(selectRecipesMainPage)

	const recipesForCategory = recipes[category]
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
							onClick={() => console.log(title)}
						/>
					))}
			</div>
			<SeeAllButton onClick={() => console.log('go to ', category)} />
		</>
	)
}

export default CategoryExamples
