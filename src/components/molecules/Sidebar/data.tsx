import React from 'react';
import { Home, Code, Star } from 'react-feather';

interface ISidebarItems {
  icon: React.ReactElement
  title: string;
  path: string;
  total: number
}

export const items: ISidebarItems[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Home />,
    total: 15,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Code />,
    total: 7,
  },
  {
    title: 'Stars',
    path: '/stars',
    icon: <Star />,
    total: 15,
  },
];
