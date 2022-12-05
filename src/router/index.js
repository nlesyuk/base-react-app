import About from '../pages/About'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'

const generalRoutes = [
  { path: '*', component: <NotFound />, exact: true },
]

export const privateRoutes = [
  { path: '/about', component: <About />, exact: true },
  { path: '/posts', component: <Posts />, exact: true },
  { path: '/posts/:id', component: <Post />, exact: true },
  ...generalRoutes,
]

export const publicRoutes = [
  { path: '/login', component: <Login />, exact: true },
  ...generalRoutes,
]