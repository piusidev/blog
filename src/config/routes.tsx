const routes = {
  home: '/',
  projects: '/projects',
  posts: '/posts',
  post: (id: string) => `/post/${id}`,
  stars: '/stars',
}

export default routes
