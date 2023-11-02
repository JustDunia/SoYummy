import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../components/Navigation/Navigation";

export const SharedLayout = () => {
	return (
		<>
			<Navigation />
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</>
	);
};
