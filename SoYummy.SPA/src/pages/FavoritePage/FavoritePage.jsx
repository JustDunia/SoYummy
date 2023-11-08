import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavoriteRecipes } from '../../redux/favorite/favorite.selectors'

import { RecipesContainer } from '../../components/RecipesContainer/RecipesContainer'
import { getFavorite, removeFromFavorites } from '../../redux/favorite/favorite.operations'

import css from './FavoritePage.module.css'

const FavoritePage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getFavorite())
	}, [dispatch])

	const handleRemoveFav = e => {
		e.preventDefault
		dispatch(removeFromFavorites(recipeId))
	}

	const recipes = useSelector(selectFavoriteRecipes)

	return (
		<div className={css.pageWrapper}>
			<div>
				<h2 className={css.pageTitle}>Favorite Recipes</h2>
				<RecipesContainer recipes={recipes} remove={handleRemoveFav} />
				{/* PAGINACJA */}
			</div>
		</div>
	)
}

export default FavoritePage
