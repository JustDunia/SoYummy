import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIsUserAuth } from '../../redux/useIsUserAuth';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useIsUserAuth();
  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoute;