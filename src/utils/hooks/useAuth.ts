import { useDispatch } from 'react-redux';

import authSlice, {
  loginFailure,
  loginStart,
  loginSuccess,
  setUser,
  invalidToken,
} from '@/store/slices/auth.slice';

import { loginTypes, signupTypes } from '../../../@types/auth';
import AuthService from '@/services/auth.service';
import useStore from '@/utils/hooks/useStore';
import notify from '@/utils/helpers/notification.utils';

const useAuth = () => {
  /**
   * REDUX HOOK
   * */
  const dispatch = useDispatch();

  /**
   * REDUX STORE
   * */
  const { user, token, authenticated, authenticating, signing } =
    useStore().auth;

  /**
   * REGISTER METHOD
   * @param data
   * */
  const register = (data: signupTypes) => AuthService.register(data);

  /**
   * REGISTER METHOD
   * @param credentials
   * */
  const login = async (credentials: loginTypes) => {
    dispatch(loginStart());
    try {
      const response: any = await AuthService.login(credentials);
      if (response.data.ok) {
        dispatch(loginSuccess(response.data));
      } else {
        dispatch(loginFailure(response.data));
      }
    } catch (e: any) {
      dispatch(loginFailure(e));
    }
  };

  /**
   * LOGOUT METHOD
   * */
  const logout = async () => {
    try {
      const response: any = await AuthService.logout();
      if (response.data.ok) {
        dispatch(authSlice.actions.logout());
      }
    } catch (e: any) {
      notify('Something went wrong .', 'error');
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await AuthService.fetchProfile();
      if (response.ok) {
        dispatch(setUser(response));
      } else {
        dispatch(invalidToken());
      }
    } catch (e: any) {
      console.error(e);
    }
  };

  return {
    user,
    token,
    authenticated,
    authenticating,
    signing,
    fetchProfile,
    register,
    login,
    logout,
  };
};

export default useAuth;
