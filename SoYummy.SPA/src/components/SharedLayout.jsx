import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Navigation from '../components/Navigation/Navigation'

import { SubscriptionButton } from './SubscriptionButton/SubscriptionButton.jsx'

import { UserMenuMock } from './UserMenuMock'

export const SharedLayout = () => {
	return (
		<div>
			{/* <UserMenuMock /> */}
			{/* <SubscriptionButton /> */}
			<Navigation />
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>
	)
}
