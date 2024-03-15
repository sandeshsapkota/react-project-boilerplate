import Dashboard from '@/pages/dashboard';
import Register from '@/pages/register';
import Login from '@/pages/login';
import ForgotPassword from '@/pages/forget-password';
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
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: ADMIN_HOME_PAGE,
    element: <Dashboard />,
  },
];

export default routes;
