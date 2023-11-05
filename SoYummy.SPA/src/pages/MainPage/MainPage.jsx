import css from './MainPage.module.css'
import Header from '../../components/Header/Header'
import CategoryExamples from './Components/CategoryExamples/CategoryExamples'
import SkewButton from '../../components/SkewButton/SkewButton'

const MainPage = () => {
	return (
		<div className={css.mainPageContainer}>
			<Header />
			<div className={css.categoriesExamples}>
				<CategoryExamples />
				<CategoryExamples />
				<CategoryExamples />
				<CategoryExamples />
			</div>
			<SkewButton onClick={() => console.log('see other categories')} text='Other categories' />
		</div>
	)
}

export default MainPage
