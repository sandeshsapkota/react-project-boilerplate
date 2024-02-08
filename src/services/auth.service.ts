import { loginTypes, signupTypes } from '../../@types/auth';
import http from '@/utils/http/http.utils';

class AuthService {
  /**
   * FETCH PROFILE
   * */
  static async fetchProfile() {
    try {
      const response = await http().get('api/profile');
      return response.data;
    } catch (e: any) {
      throw e;
    }
  }

  /**
   * SIGN UP
   * @param credentials
   * */
  static async register(credentials: signupTypes) {
    try {
      const response = await http().post(
        'api/register',
        JSON.stringify(credentials),
      );
      return response.data;
    } catch (e: any) {
      throw e;
    }
  }

  /**
   * LOGIN
   * @param credentials
   * */
  static async login(credentials: loginTypes) {
    try {
      return await http().post('api/login', JSON.stringify(credentials));
    } catch (e: any) {
      throw e;
    }
  }

  /**
   * LOGOUT METHOD
   * */
  static logout(): Promise<void> {
    return http().post('api/logout');
  }
}

export default AuthService;
