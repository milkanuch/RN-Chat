import { ChatItemProps } from 'components/ChatItem/chatItem.types';

import { getInstanceBearer } from 'services/index';
import {
  DuoChatWithUsers,
  FindUserParams,
  MessageResponseParams,
  MessagesRequestParams,
  StartDuoChatParams,
  User,
} from 'services/user/user.types';

import {
  GroupChatParams,
  GroupChatResponseParams,
  UploadAvatarResponseParams,
} from './user.types';

export const uploadAvatar = async (imageUri: string) => {
  const instanceWithBearer = await getInstanceBearer();

  try {
    const requestBody = {
      encodedContent: imageUri,
    };

    const { data } = await instanceWithBearer.post<UploadAvatarResponseParams>(
      'user/upload-avatar',
      requestBody,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to upload avatar, ${error}`);
  }
};

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
    const { data } = await instanceBearer.get<FindUserParams>(`/user`);

    return data.id;
  } catch (error) {
    throw new Error(`Unable to get user id ${error}`);
  }
};

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
    const { data } = await instanceBearer.get<StartDuoChatParams>(
      `/user/duo-chats/start/${userId}`,
    );

    return data.chatId;
  } catch (error) {
    throw new Error(`Unable to start duo chat ${error}`);
  }
};

export const startGroupChat = async (groupOptions: GroupChatParams) => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.post<GroupChatResponseParams>(
      '/user/group-chats/new',
      groupOptions,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to start group chat ${error}`);
  }
};

export const setGroupChatAvatar = async (chatId: number, imageUri: string) => {
  try {
    const instanceBearer = await getInstanceBearer();
    const requestBody = {
      encodedContent: imageUri,
    };

    const { data } = await instanceBearer.post<UploadAvatarResponseParams>(
      `/user/group-chats/${chatId}/upload-avatar`,
      requestBody,
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to set group chat avatar ${error}`);
  }
};

export const getAllGroupChats = async () => {
  try {
    const instanceBearer = await getInstanceBearer();
    const { data } = await instanceBearer.get<ChatItemProps[]>(
      '/user/group-chats/all',
    );

    return data;
  } catch (error) {
    throw new Error(`Unable to get all group chats ${error}`);
  }
};
