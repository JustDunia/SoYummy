import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logOut } from "../../redux/auth/auth.operations";
import { selectUserName } from "../../redux/auth/auth.selectors";
import { UserButton, UserMenuContainer, UserInfo } from "./UserMenu.styled";

export const UserMenu = () => {
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <UserMenuContainer>
      <UserInfo>{username ? `Welcome, ${username}` : "Welcome"}</UserInfo>
      <UserButton type="button" onClick={handleLogout}>
        Logout
      </UserButton>
    </UserMenuContainer>
  );
};
