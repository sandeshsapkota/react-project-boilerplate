import { useNavigate } from 'react-router';
import LoginSignUpFormWrapper from '@/components/auth/LoginSignUpFormWrapper';
import useAuth from '@/utils/hooks/useAuth';

const Index = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = () =>
    register({ username: 'sundar', password: 'sundar' });

  return (
    <LoginSignUpFormWrapper title="Register a new account">
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white rounded-md px-8  py-3 flex items-center gap-6"
      >
        Register
      </button>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white rounded-md px-8  py-3 flex items-center gap-6"
      >
        Cancel
      </button>
    </LoginSignUpFormWrapper>
  );
};

export default Index;
