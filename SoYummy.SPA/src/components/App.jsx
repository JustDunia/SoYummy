import { Routes, Route } from 'react-router-dom'
import { SharedLayout } from '../components/SharedLayout'
import { lazy } from 'react'
import css from './App.module.css'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { currentUser } from '../redux/auth/auth.operations'
import WelcomePage from '../pages/WelcomePage/WelcomePage'
import SigninPage from '../pages/SigninPage/SigninPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

export const App = () => {
	const AddRecipiePage = lazy(() => import('../pages/AddRecipiePage/AddRecipiePage'))
	const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'))
	const MainPage = lazy(() => import('../pages/MainPage/MainPage'))
	const CategoriesPage = lazy(() => import('../pages/CategoriesPage/CategoriesPage'))
	const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'))
	const MyRecipesPage = lazy(() => import('../pages/MyRecipesPage/MyRecipesPage'))
	const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage/ShoppingListPage'))
	const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'))
	const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(currentUser())
	}, [dispatch])

	return (
		<div>
			<Routes>
				<Route path='/welcome' element={<WelcomePage />} />
				<Route path='/signin' element={<SigninPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<MainPage />} />
					<Route path='/categories/:categoryName' element={<CategoriesPage />} />
					<Route path='/add' element={<AddRecipiePage />} />
					<Route path='/favorite' element={<FavoritePage />} />
					<Route path='/recipe/:recipeId' element={<RecipePage />} />
					<Route path='/my' element={<MyRecipesPage />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/shopping-list' element={<ShoppingListPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	)
}
