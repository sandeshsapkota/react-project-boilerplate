import { lazy } from 'react';
import { ADMIN_HOME_PAGE } from '@/utils/constants/common';

const Dashboard = lazy(() => import('@/pages/dashboard'));
const Register = lazy(() => import('@/pages/register'));
const Login = lazy(() => import('@/pages/login'));
const ForgotPassword = lazy(() => import('@/pages/forget-password'));

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
