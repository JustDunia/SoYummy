import css from './MyRecipesPage.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOwnRecipe, removeOwnRecipe } from '../../redux/ownRecipes/ownRecipes.operations'
import { RecipesContainer } from '../../components/RecipesContainer/RecipesContainer'
import { selectOwnRecipes } from '../../redux/ownRecipes/ownRecipes.selectors'
import { Pagination } from '../../components/Pagination/Pagination'

const MyRecipesPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getOwnRecipe())
	}, [dispatch])

	const handleRemoveFav = e => {
		e.preventDefault
		dispatch(removeOwnRecipe(recipeId))
	}

	const myRecipes = useSelector(selectOwnRecipes)

	return (
		<div className={css.pageWrapper}>
			<div>
				<h2 className={css.pageTitle}>My recipies</h2>
				<RecipesContainer recipes={myRecipes} remove={handleRemoveFav} />
				<Pagination />
			</div>
		</div>
	)
}

export default MyRecipesPage
