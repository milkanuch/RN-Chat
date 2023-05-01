export interface RegisterRequestParams {
  phoneNumber: string;
  nickname: string;
  userPhoto?: string;
  password: string;
}

export interface LoginRequestParams {
  phoneNumber: string;
  password: string;
}

export interface TokensParams {
  accessToken: string;
  accessTokenExpiration: string;
  refreshTokenExpiration: string;
  refreshToken: string;
}

export interface LoginResponseProps extends TokensParams {
  isRegistered: boolean;
}

export interface RefreshRequestParams {
  oldRefreshToken: string;
}
