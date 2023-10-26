import { Routes, Route } from 'react-router-dom'
import { SharedLayout } from '../components/SharedLayout'
import { lazy } from 'react'

export const App = () => {
	// dynamiczny import komponentów
	// w przypadku lazyloading w komponentach trzeba używać konstrukcji const Home=()=>{}... export default Home
	const Home = lazy(() => import('../pages/Home'))

	return (
		<div>
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
		</div>
	)
}
