import { loginTypes, signupTypes } from '../../@types/auth';
import http from '@/utils/http/http.utils';

class AuthService {
  /**
   * FETCH PROFILE
   * */
  static async fetchProfile() {
    const response = await http().get('api/profile');
    return response.data;
  }

  /**
   * SIGN UP
   * @param credentials
   * */
  static async register(credentials: signupTypes) {
    const response = await http().post(
      'api/register',
      JSON.stringify(credentials),
    );
    return response.data;
  }

  /**
   * LOGIN
   * @param credentials
   * */
  static async login(credentials: loginTypes) {
    return http().post('api/login', JSON.stringify(credentials));
  }

  /**
   * LOGOUT METHOD
   * */
  static logout(): Promise<void> {
    return http().post('api/logout');
  }
}

export default AuthService;
