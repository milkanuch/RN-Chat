import {
  LoginRequestParams,
  LoginResponseProps,
  RefreshRequestParams,
  RegisterRequestParams,
  TokensParams,
} from 'services/auth/atuth.types';
import { instance } from 'services/index';

export const register = async (props: RegisterRequestParams) => {
  try {
    const { data } = await instance.post<TokensParams>('/auth/register', {
      ...props,
    });
    return data;
  } catch (e) {
    throw new Error('Unable to register user');
  }
};

export const login = async (props: LoginRequestParams) => {
  try {
    const { data } = await instance.post<LoginResponseProps>('/auth/login', {
      ...props,
    });
    return data;
  } catch {
    throw new Error('Unable to register user');
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
