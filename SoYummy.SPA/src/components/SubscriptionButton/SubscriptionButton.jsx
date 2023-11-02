import { useDispatch, useSelector } from "react-redux";
import { subscription } from "../../redux/auth/auth.operations";

export const SubscriptionButton = () => {
  const dispatch = useDispatch();
  const isSubscriber = useSelector((state) => state.auth.user.isSubscriber);

  const handleSubscriptionToggle = () => {
    dispatch(subscription());
  };

  return (
    <button onClick={handleSubscriptionToggle}>
      {isSubscriber ? "Sign out from newsletter" : " Sign in newsletter"}
    </button>
  );
};
