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

import { ChatItemProps } from 'components/ChatItem/chatItem.types';

import { getInstanceBearer } from 'services/index';
import {
  DuoChatWithUsers,
  MessageResponseParams,
  User,
} from 'services/user/user.types';

export const findUserByPhone = async (phoneNumber: string) => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.get<User>(
      `/user/phone/${phoneNumber}`,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to find user by phone number ${error}`);
  }
};

export const getAllDuoChats = async () => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.get<ChatItemProps[]>(
      `/user/duo-chats/all`,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to get all duo chats ${error}`);
  }
};

export const getChatById = async (chatId: string) => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.get<DuoChatWithUsers>(
      `/user/duo-chats/${chatId}`,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to get duo chat ${error}`);
  }
};

export const getUserId = async () => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.get<string>(`/user`);

    return data;
  } catch (error) {
    throw new Error(`Unable to get user id ${error}`);
  }
};

export interface MessagesRequestParams {
  chatId: string;
  time?: Date | number;
}

export const getMessages = async (props: MessagesRequestParams) => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.post<MessageResponseParams>(
      `/user/duo-chats/messages`,
      {
        ...props,
      },
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to get messages ${error}`);
  }
};

export const getChatWithSpecificUser = async (userId: string) => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.get<DuoChatWithUsers>(
      `/user/duo-chats/with/${userId}`,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to get chat with specific user ${error}`);
  }
};
export const startDuoChat = async (userId: string) => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.get<{ chatId: string }>(
      `/user/duo-chats/start/${userId}`,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to start duo chat ${error}`);
  }
};
