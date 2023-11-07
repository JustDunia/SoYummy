import css from './MainPage.module.css'
import Header from '../../components/Header/Header'
import CategoryExamples from './Components/CategoryExamples/CategoryExamples'
import SkewButton from '../../components/SkewButton/SkewButton'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getRecipesMainPage } from '../../redux/recipes/recipes.operations'

const MainPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRecipesMainPage())
	}, [dispatch])

	const basicCategories = ['Breakfast', 'Miscellaneous', 'Chicken', 'Dessert']
	
	return (
		<div className={css.mainPageContainer}>
			<Header />
			<div className={css.categoriesExamples}>
				{basicCategories.map((name, index) => (
					<CategoryExamples category={name} key={index} />
				))}
			</div>
			<SkewButton onClick={() => console.log('see other categories')} text='Other categories' />
		</div>
	)
}

export default MainPage

// console.log(arr[(Math.floor(Math.random() * arr.length))]);
