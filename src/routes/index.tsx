import Dashboard from '@/pages/dashboard';
import Register from '@/pages/register';
import Login from '@/pages/login';
import { ADMIN_HOME_PAGE } from '@/utils/constants/common';

const routes = [
  {
    path: '/',
    element: <Login />,
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
    path: ADMIN_HOME_PAGE,
    element: <Dashboard />,
  },
];

export default routes;
