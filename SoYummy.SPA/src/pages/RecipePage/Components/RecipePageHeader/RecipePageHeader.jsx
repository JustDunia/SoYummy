import css from './RecipePageHeader.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectRecipe } from '../../../../redux/recipes/recipes.selectors'
import { useDispatch } from 'react-redux'
import { addToFavorites } from '../../../../redux/favorite/favorite.operations'
import SkewButton from '../../../../components/SkewButton/SkewButton'

const RecipePageHeader = () => {
	const { title, description, time, _id } = useSelector(selectRecipe)
	const dispatch = useDispatch()
	return (
		<div className={css.container}>
			<h1 className={css.title}>{title}</h1>
			<p className={css.description}>{description}</p>
			<SkewButton
				text='Add to favorite recipes'
				classNames={css.button}
				isSmaller={true}
				onClick={() => dispatch(addToFavorites(_id))}
			/>
			<p className={css.time}>
				<img src='/src/images/commonSvgImg/icon-clock.svg' className={css.clock} />
				{time} min
			</p>
		</div>
	)
}

export default RecipePageHeader
