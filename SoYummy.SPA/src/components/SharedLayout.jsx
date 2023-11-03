import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { SubscriptionButton } from "./SubscriptionButton/SubscriptionButton.jsx";

import { UserMenu } from "./UserMenu";

export const SharedLayout = () => {
  return (
    <div>
      <UserMenu />
      <SubscriptionButton />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
