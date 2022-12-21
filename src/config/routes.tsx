import React from 'react';

import {
  Home, Projects, Stars, Posts, Post,
} from 'pages';

enum RouteTypes {
  home = 'home',
  projects = 'projects',
  stars = 'stars',
  posts = 'posts',
  post = 'post',
}

type IRoutes = {
  [key in RouteTypes]: {
    path: string
    component: React.ReactElement
    isPrivate: Boolean
  }
};

const routes: IRoutes = {
  home: {
    path: '/',
    component: <Home />,
    isPrivate: false,
  },
  projects: {
    path: '/projects',
    component: <Projects />,
    isPrivate: false,
  },
  posts: {
    path: '/posts',
    component: <Posts />,
    isPrivate: false,
  },
  post: {
    path: '/post/:id',
    component: <Post />,
    isPrivate: false,
  },
  stars: {
    path: '/stars',
    component: <Stars />,
    isPrivate: false,
  },
};

export default routes;
