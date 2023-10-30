//KOD MICHAŁA
// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { isUserLoged } from "../redux/auth/selectors";

// export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
//   const userLogged = useSelector(isUserLoged);
//   return userLogged ? <Navigate to={redirectTo} /> : <Component />;
// };

// KOD ANI
// import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { useIsUserAuth } from '../../redux/useIsUserAuth';

// const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLogin = useIsUserAuth();
//   return isLogin ? <Navigate to={redirectTo} /> : <Component />;
// };

// RestrictedRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   redirectTo: PropTypes.string,
// };

// export default RestrictedRoute;
