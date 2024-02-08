import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '@/utils/hooks/useAuth';
import LoginSignUpFormWrapper from '@/components/auth/LoginSignUpFormWrapper';

const Index = () => {
  /*
   * STATE
   * */
  const { login, authenticating, authenticated } = useAuth();

  /*
   * REDIRECT
   * */
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) {
      navigate('/home');
    }
  }, [authenticated, navigate]);

  const handleSubmit = () => login({ username: 'sundar', password: 'sundar' });

  return (
    <LoginSignUpFormWrapper title="Sign in to your account">
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white rounded-md px-8  py-3 flex items-center gap-6"
      >
        Login {authenticating && <span className="loader" />}
      </button>
      <button
        onClick={() => navigate('/register')}
        className="bg-blue-500 text-white rounded-md px-8  py-3 flex items-center gap-6"
      >
        Register
      </button>
    </LoginSignUpFormWrapper>
  );
};

export default Index;
