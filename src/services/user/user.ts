/*
NOTE: need to research how to upload images to server
because we get an network error when trying to upload

import { tokenInstance } from 'services/index';
import { getStorageItem } from 'services/storage/storage';
import { storageKeys } from 'services/storage/storage.types';

import { avatarKeys, UploadAvatarResponseParams } from './user.types';

export const uploadAvatar = async (imageUri: string) => {
  const instance = await tokenInstance();
  const bearer = await getStorageItem(storageKeys.accessToken);

  try {
    const formData = {
      [avatarKeys.avatar]: new File([imageUri], 'avatar.png', {
        type: 'image/png',
        lastModified: Date.now(),
      }),
    };

    const { data } = await instance.post<UploadAvatarResponseParams>(
      'user/upload-avatar',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${bearer}`,
        },
      },
    );

    return data;
  } catch (error: Error) {
    throw new Error(`Unable to upload avatar, ${error.message}`);
  }
};
*/
