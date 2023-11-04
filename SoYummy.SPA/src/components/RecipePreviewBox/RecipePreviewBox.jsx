import css from './RecipePreviewBox.module.css'

const RecipePreviewBox = () => {
	return (
		<div className={css.imageBox}>
			{/* img */}
			<div className={css.productName}>
      Banana Pancakes
			</div>
		</div>
	)
}

export default RecipePreviewBox
