import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '@/hooks/useAuth';

interface ProtectedProps {
  children: ReactNode;
}

const Protected: FC<ProtectedProps> = (props) => {
  const navigate = useNavigate();

  /*
   * STATE AND PROPS
   * */
  const { children } = props;
  const { token, fetchProfile, authenticated } = useAuth();
  console.log(token);

  useEffect(() => {
    token ? fetchProfile() : navigate('/');
  }, [token]);

  return authenticated ? children : null;
};

export default Protected;
