import routes from 'config/routes';
import GlobalProvider from 'hooks';
import React from 'react';
import {
  Route,
  Routes as Switch,
  BrowserRouter,
} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const Routes: React.FC = () => (
  <BrowserRouter>
    <GlobalProvider>
      <Switch>
        {
          Object.entries(routes).map(([key, route]) => (
            <Route
              key={key}
              path={route.path}
              element={<ProtectedRoute isPrivate={route.isPrivate} outlet={route.component} />}
            />
          ))
        }
      </Switch>
    </GlobalProvider>
  </BrowserRouter>
);

export default Routes;
