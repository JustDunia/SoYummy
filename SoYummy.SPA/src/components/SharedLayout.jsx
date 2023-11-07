import { Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import Navigation from '../components/Navigation/Navigation'

import { SubscriptionButton } from './SubscriptionButton/SubscriptionButton.jsx'

import { UserMenuMock } from './UserMenuMock'

export const SharedLayout = () => {
	const location = useLocation();
	const isWelcomePage = location.pathname ==='/' || location.pathname ==='/register' || location.pathname ==='/signin';
	console.log('location.pathname:', location.pathname);
	return (
		<div>

			{isWelcomePage ? null :<UserMenuMock />}
			{isWelcomePage ? null :<SubscriptionButton />}
			{isWelcomePage ? null : <Navigation />}
			

			{/* <UserMenuMock /> */}
			{/* <SubscriptionButton /> */}
			<Navigation />

			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>
	)
}
