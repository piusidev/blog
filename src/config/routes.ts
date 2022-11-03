import React from 'react';
import Auth from '../pages/Auth';
import Home from '../pages/Home';

interface IRoutes {
  path: string
  component: React.FC
  isPrivate: Boolean
}

export const routes: IRoutes[] = [
  {
    path: '/',
    component: Home,
    isPrivate: true
  },
  {
    path: '/login',
    component: Auth,
    isPrivate: false
  }
];

export const routesMap = {
  home: '/',
  login: '/login'
};
