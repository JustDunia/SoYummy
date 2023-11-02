import { useSelector } from "react-redux";

import { userName, isUserLoged } from "../../redux/auth/selectors";

const FavoritePage = () => {
  console.log("favorite page");
  const user = useSelector(userName);
  const isLogged = useSelector(isUserLoged);

  console.log("USER:", user);
  console.log("LOGGED ?:", isLogged);
  return <h2> FavoritePage</h2>;
};

export default FavoritePage;
