export const selectIsUserLoged = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) =>
  state.auth.user ? state.auth.user.username : null;

export const selectUserToken = (state) => state.auth.user.token;
