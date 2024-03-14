import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import useAuth from '@/hooks/useAuth';
import { LoginSignUpFormWrapper } from '@/components';
import { ADMIN_HOME_PAGE } from '@/utils/constants/common';

const Index = () => {
  /*
   * STATE
   * */
  const { login, token } = useAuth();

  /*
   * REDIRECT
   * */
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(ADMIN_HOME_PAGE);
    }
  }, [token]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <LoginSignUpFormWrapper title="Sign in to your account">
      <form onSubmit={handleSubmit} className="grid gap-8 login-form">
        <div className="grid gap-6">
          <div>
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <input
              className="bg-[#f9fafb] text-gray-900 sm:text-sm rounded block w-full px-3 py-2 border !border-gray-200 border-solid"
              type="text"
              value={username}
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              className="bg-[#f9fafb] text-gray-900 sm:text-sm rounded block w-full px-3 py-2 border !border-gray-200 border-solid"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4  border border-gray-700 opacity-60  bg-gray-50 checked:opacity-100"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="remember"
                  className="text-primary-500 dark:text-primary-600"
                >
                  Remember me
                </label>
              </div>
            </div>
            <Link
              to="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
        >
          Sign In
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </Link>
        </p>
      </form>
    </LoginSignUpFormWrapper>
  );
};

export default Index;
