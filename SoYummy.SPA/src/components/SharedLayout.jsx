import { Outlet } from 'react-router-dom'

export const SharedLayout = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Outlet />
		</Suspense>
	)
}
