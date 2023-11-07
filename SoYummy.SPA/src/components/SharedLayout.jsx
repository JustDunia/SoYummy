import { Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import Navigation from '../components/Navigation/Navigation'

import { SubscriptionButton } from './SubscriptionButton/SubscriptionButton.jsx'

import { UserMenuMock } from './UserMenuMock'

export const SharedLayout = () => {
	const location = useLocation();
	const isWelcomePage = location.pathname ==='/';
	console.log('location.pathname:', location.pathname);
	return (
		<div>
			{/* <UserMenuMock />
			<SubscriptionButton /> */}
			{/* Warunkowe renderowanie nawigacji na stronach innych niż strona startowa */}
			{isWelcomePage ? null : <Navigation />}
			
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>
	)
}
