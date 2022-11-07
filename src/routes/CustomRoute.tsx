import React, { ReactElement } from 'react';
import { useAuth } from 'hooks/useAuth';
import { RouteProps, Redirect, Route } from 'react-router-dom';

interface ICustomRouteProps extends RouteProps {
  isPrivate: Boolean
}

const CustomRoute: React.FC<ICustomRouteProps> = ({ isPrivate, ...rest }): ReactElement => {
  const { loading, authenticated } = useAuth();

  if (loading) {
    return <h1>loading</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default CustomRoute;
