import GlobalProvider from 'hooks';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <GlobalProvider>
      <Router>
          <Switch>
            <Route path="/" element={<Home />} />
          </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default Routes;
