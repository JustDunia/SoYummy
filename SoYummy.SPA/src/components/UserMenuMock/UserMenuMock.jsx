import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logOut } from "../../redux/auth/auth.operations";
import { selectUserName } from "../../redux/auth/auth.selectors";
import { UserButton, UserMenuContainer, UserInfo } from "./UserMenuMock.styled";
import { UserProfile } from "../UserProfileMock/UserProfile";

export const UserMenuMock = () => {
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <UserInfo>{username ? `Welcome, ${username}` : "Welcome"}</UserInfo>
      <UserProfile />
      <UserButton type="button" onClick={handleLogout}>
        Logout
      </UserButton>
    </UserMenuContainer>
  );
};
