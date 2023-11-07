import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipe } from '../../redux/recipes/recipes.operations'
import RecipePageHeader from './Components/RecipePageHeader/RecipePageHeader'
import IngredientsList from './Components/IngredientsList/IngredientsList'
import Preparation from './Components/Preparation/Preparation'

const RecipePage = () => {
	const params = useParams()
	const recipeId = params.recipeId

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRecipe(recipeId))
	}, [dispatch])

	return (
		<div>
			<RecipePageHeader />
			<IngredientsList />
			<Preparation/>
		</div>
	)
}

export default RecipePage
