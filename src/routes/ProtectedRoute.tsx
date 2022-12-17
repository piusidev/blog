import React, { ReactElement } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
import routes from 'config/routes';

interface ICustomRouteProps {
  isPrivate: Boolean,
  outlet: ReactElement
}

const ProtectedRoute: React.FC<ICustomRouteProps> = ({ isPrivate, outlet }): ReactElement => {
  const { loading, authenticated } = useAuth();

  if (loading) {
    return <h1>loading</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Navigate to={routes.home.path} />;
  }

  return outlet;
};

export default ProtectedRoute;
