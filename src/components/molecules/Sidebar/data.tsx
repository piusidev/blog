import React from 'react'
import { Home, Code, Star, Feather } from 'react-feather'

interface ISidebarItems {
  icon: React.ReactElement
  title: string
  path: string
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
    title: 'Posts',
    path: '/posts',
    icon: <Feather />,
    total: 5,
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
]
