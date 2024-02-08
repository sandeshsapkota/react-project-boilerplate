import Welcome from '@/pages';
import Home from '@/pages/home';
import Register from '@/pages/register';

const routes = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

export default routes;
