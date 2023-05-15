import {
  LoginRequestParams,
  LoginResponseProps,
  RefreshRequestParams,
  RegisterRequestParams,
  TokensParams,
} from 'services/auth/auth.types';
import { instance } from 'services/index';

export const register = async (props: RegisterRequestParams) => {
  try {
    const { data } = await instance.post<TokensParams>('/auth/register', {
      ...props,
    });

    return data;
  } catch (error) {
    throw new Error(`Unable to register user, ${error}`);
  }
};

export const login = async (props: LoginRequestParams) => {
  try {
    const { data } = await instance.post<LoginResponseProps>('/auth/login', {
      ...props,
    });

    return data;
  } catch (error) {
    throw new Error(`Unable to register user, ${error}`);
  }
};

export const refresh = async (props: RefreshRequestParams) => {
  try {
    const { data } = await instance.post<TokensParams>('/auth/refresh', {
      ...props,
    });

    return data;
  } catch {
    throw new Error('Unable to register user');
  }
};

export const checkIsUserRegistered = async (phoneNumber: string) => {
  try {
    await instance.get<boolean>(`/auth/exists/${phoneNumber}`);
    return true;
  } catch {
    return false;
  }
};
