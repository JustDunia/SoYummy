import css from './CategoryExamples.module.css'
import RecipePreviewBox from '../../../../components/RecipePreviewBox/RecipePreviewBox'
import SeeAllButton from '../SeeAllButton/SeeAllButton'

const CategoryExamples = () => {
	return (
		<>
			<h2 className={css.categoryName}>Breakfast</h2>
			<div className={css.categoryExamples}>
				<RecipePreviewBox
					img='https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560540/esnyz2hleveentclsvya.jpg'
					productName='Banana Pancakes'
					onClick={() => console.log('go to banana')}
				/>
				<RecipePreviewBox
					img='https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560540/esnyz2hleveentclsvya.jpg'
					productName='Banana Pancakes'
					onClick={() => console.log('go to banana')}
				/>
				<RecipePreviewBox
					img='https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560540/esnyz2hleveentclsvya.jpg'
					productName='Banana Pancakes'
					onClick={() => console.log('go to banana')}
				/>
				<RecipePreviewBox
					img='https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560540/esnyz2hleveentclsvya.jpg'
					productName='Banana Pancakes'
					onClick={() => console.log('go to banana')}
				/>
			</div>
			<SeeAllButton onClick={() => console.log('go to breakfast')} />
		</>
	)
}

export default CategoryExamples
