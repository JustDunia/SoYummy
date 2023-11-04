import { jwtDecode } from "jwt-decode";

export const selectIsUserLoged = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) =>
  state.auth.user ? state.auth.user.username : null;

export const selectUserToken = (state) => state.auth.user.token;

export const selectUserId = (state) => {
  const token = state.auth.token;
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.userId;
  }
  return null;
};
