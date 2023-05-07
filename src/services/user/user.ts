import { instance } from 'services/index';

import { UploadAvatarParams, UploadAvatarResponseParams } from './user.types';

export const uploadAvatar = async (props: UploadAvatarParams) => {
  try {
    const { data } = await instance.post<UploadAvatarResponseParams>(
      '/user/avatar',
      { ...props },
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to upload avatar, ${error}`);
  }
};
