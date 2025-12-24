import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'hooks/index';
import { getAuthorizationStatus } from 'store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '@constants';

type PrivateRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
}

function PrivateRoute({ restrictedFor, redirectTo, children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    restrictedFor === authorizationStatus
      ? <Navigate to={redirectTo} />
      : children
  );
}

export default PrivateRoute;
