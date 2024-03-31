export interface loginType {
  username: string;
  password: string;
}

export interface signupType {
  username: string;
  password: string;
  confirm_password: string;
}

export type RolesType = 'admin' | 'developer' | 'manager';
