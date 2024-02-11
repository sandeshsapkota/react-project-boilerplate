import Welcome from '@/pages';
import Home from '@/pages/home';
import Register from '@/pages/register';
import Login from '@/pages/login';

const routes = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <Home />,
  },
];

export default routes;
