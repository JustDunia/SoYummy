import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../components/Navigation/Navigation";

export const SharedLayout = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Navigation />
			<Outlet />
		</Suspense>
	);
};
