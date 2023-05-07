export enum avatarKeys {
  avatar = 'avatar',
}

export interface UploadAvatarParams {
  key: avatarKeys;
  value: string;
}

export interface UploadAvatarResponseParams {
  message: string;
}
