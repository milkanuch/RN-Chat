export enum avatarKeys {
  avatar = 'avatar',
}

export interface UploadAvatarParams {
  key: avatarKeys;
  value: File;
}

export interface UploadAvatarResponseParams {
  message: string;
}
