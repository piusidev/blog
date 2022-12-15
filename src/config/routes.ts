import React from 'react';
import Auth from '../pages/Auth';
import Home from '../pages/Home';

interface IRoutes {
  [key: string]: {
    path: string
    component: React.FC
    isPrivate: Boolean
  }
}

const routes: IRoutes = {
  home: {
    path: '/',
    component: Home,
    isPrivate: true,
  },
  login: {
    path: '/login',
    component: Auth,
    isPrivate: false,
  },
};

export default routes;
