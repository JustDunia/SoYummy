import { Routes, Route } from 'react-router-dom'
import { SharedLayout } from '../components/SharedLayout'
import { lazy } from 'react'
import css from './App.module.css'

export const App = () => {
	const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'))
	const AddRecipiePage = lazy(() => import('../pages/AddRecipiePage/AddRecipiePage'))
	const FavoritePage = lazy(() => import('../pages/FavoritePage/FavoritePage'))
	const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'))
	const SigninPage = lazy(() => import('../pages/SigninPage/SigninPage'))
	const MainPage = lazy(() => import('../pages/MainPage/MainPage'))
	const CategoriesPage = lazy(() => import('../pages/CategoriesPage/CategoriesPage'))
	const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'))
	const MyRecipiesPage = lazy(() => import('../pages/MyRecipiesPage/MyRecipiesPage'))
	const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage/ShoppingListPage'))
	const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'))
	const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))

	return (
		<div>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<WelcomePage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/signin' element={<SigninPage />} />
					<Route path='/main' element={<MainPage />} />
					<Route path='/categories/:categoryName' element={<CategoriesPage />} />
					<Route path='/add' element={<AddRecipiePage />} />
					<Route path='/favorite' element={<FavoritePage />} />
					<Route path='/recipe/:recipeId' element={<RecipePage />} />

					{/* Nie wiem czemu ten zapis nie działa:/  */}

					{/* <Route
            path="/my"
            element={
              <RestrictedRoute component={<MyRecipiesPage />} redirectTo="/" />
            }
          /> */}
					<Route path='/my' element={<MyRecipiesPage />} />

					<Route path='/search' element={<SearchPage />} />
					<Route path='/shopping-list' element={<ShoppingListPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	)
}
