export interface UserLogin {
  email: string;
  password: string;
}

export interface User extends UserLogin {
  username: string;
}

export interface NewUser {
  username: string;
  email: string;
  id: number;
  token?: string;
}

export interface InitialState {
  user: NewUser | null;
  loading: boolean;
  error: null | string;
}

export interface IUserActivationData {
  uid: string;
  token: string;
}

export interface UserJWT {
  refresh: string;
  access: string;
}
