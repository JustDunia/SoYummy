import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { SubscriptionButton } from "./SubscriptionButton/SubscriptionButton.jsx";

import { UserMenuMock } from "./UserMenuMock";

export const SharedLayout = () => {
  return (
    <div>
      <UserMenuMock />
      <SubscriptionButton />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
