import Template from 'components/templates/Default';
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
      <Template>
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

      </Template>
    </GlobalProvider>
  </BrowserRouter>
);

export default Routes;
