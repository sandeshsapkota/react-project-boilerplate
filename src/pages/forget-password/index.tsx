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
  const { token } = useAuth();

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <LoginSignUpFormWrapper title="Forgot your password ?">
      <form onSubmit={handleSubmit} className="grid gap-8 login-form">
        <p className="text-sm text-gray-500">
          Type in your email in the field below and we will send you a code to
          reset your password.
        </p>
        <div className="grid gap-6">
          <div>
            <label htmlFor="email" className="text-sm">
              Your email
            </label>
            <input
              className="bg-[#f9fafb] text-gray-900 sm:text-sm rounded block w-full px-3 py-2 border !border-gray-200 border-solid"
              type="text"
              value={username}
              id="email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline dark:text-primary-500"
          >
            Back to Login
          </Link>
        </div>
      </form>
    </LoginSignUpFormWrapper>
  );
};

export default Index;
