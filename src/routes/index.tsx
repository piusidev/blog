import { routes } from 'config/routes';
import GlobalProvider from 'hooks';
import React from 'react';
import {
  Switch,
  BrowserRouter
} from 'react-router-dom';
import CustomRoute from './CustomRoute';

const Routes: React.FC = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
          <Switch>
            {
              routes.map((route, index) => (
                <CustomRoute
                  exact
                  isPrivate={route.isPrivate}
                  component={route.component}
                  path={route.path}
                  key={index}
                />
              ))
            }
          </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default Routes;
