import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Footer from './Footer/Footer'

export const SharedLayout = () => {
	return (
		<div>
			<Navigation />
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
			<Footer />
		</div>
	)
}
