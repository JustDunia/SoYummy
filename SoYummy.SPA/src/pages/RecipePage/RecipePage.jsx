import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipe } from '../../redux/recipes/recipes.operations'
import { selectRecipe } from '../../redux/recipes/recipes.selectors'

import RecipePageHeader from './Components/RecipePageHeader/RecipePageHeader'

const RecipePage = () => {
	const params = useParams()
	const recipeId = params.recipeId

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRecipe(recipeId))
	}, [dispatch])

	const recipe = useSelector(selectRecipe)

	return (
		<div>
			<RecipePageHeader />
		</div>
	)
}

export default RecipePage
