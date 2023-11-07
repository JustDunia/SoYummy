import css from './RecipePreviewBox.module.css'

const RecipePreviewBox = props => {
	const { img, productName, onClick } = props
	return (
		<div className={css.imageBox}>

			<img src={img} className={css.recipePreview} />

			<img src={img} className={css.recipePreview} alt={productName} />

			<button className={css.productName} onClick={onClick}>
				{productName}
			</button>
		</div>
	)
}

export default RecipePreviewBox
