import { Routes, Route } from 'react-router-dom'
import { SharedLayout } from '../components/SharedLayout'
import { lazy } from 'react'

export const App = () => {
	// dynamiczny import komponentów
	const Home = lazy(() => import('../pages/Home'))

	return (
		<Routes>
			{/* Do podanych ścieżek należy dodać elementy, które będą na nich renderowane */}
			<Route path='/' element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path='/register' element={<></>} />
				<Route path='/signin' element={<></>} />
				<Route path='/categories/:categoryName' element={<></>} />
				<Route path='/add' element={<></>} />
				<Route path='/my' element={<></>} />
				<Route path='/favorite' element={<></>} />
				<Route path='/shopping-list' element={<></>} />
				<Route path='/search' element={<></>} />
				<Route path='/recipe/:recipeId' element={<></>} />
				<Route path='*' element={<></>} />
			</Route>
		</Routes>
	)
}
