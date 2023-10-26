import { useSelector } from 'react-redux';

export const useIsUserAuth = () => {
  const token = useSelector(state => state.user.token);
  return Boolean(token);
};