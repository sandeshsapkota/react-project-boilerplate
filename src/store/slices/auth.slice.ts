import { createSlice } from '@reduxjs/toolkit';
import { clearToken, getToken, setToken } from '@/utils/helpers/token.utils';

interface AuthTypes {
  token: any;
  authenticated: boolean;
  authenticating: boolean;
  signing: boolean;
  user: any;
}

const initialState: AuthTypes = {
  token: getToken() || '',
  authenticated: false,
  authenticating: false,
  signing: false,
  user: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess(state) {
      state.signing = false;
    },

    loginSuccess(state, action) {
      const { token } = action.payload;

      state.authenticated = true;
      state.authenticating = false;

      state.token = token;
      setToken(token);
    },

    loginFailure(state) {
      state.authenticating = false;
    },

    loginStart(state) {
      state.authenticating = true;
    },

    logout(state) {
      state.authenticated = false;
      state.token = '';
      clearToken();
    },

    setUser(state, action) {
      state.user = action.payload.profile;
      state.authenticated = true;
    },

    invalidToken(state) {
      state.token = '';
      state.authenticating = false;
      state.authenticated = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  invalidToken,
  logout,
  signupSuccess,
  setUser,
} = authSlice.actions;
export default authSlice;
