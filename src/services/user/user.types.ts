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
export interface User {
  id: string;
  phoneNumber: string;
  nickname: string;
  avatar: string;
  bio: string;
  registration: string;
}

export interface Message {
  id: number;
  body: string;
  time: string;
  isPinned: boolean;
  sender: User;
  likes: number;
}

export interface MessageResponseParams {
  messages: Message[];
}
export interface DuoChatWithUsers {
  id: string;
  name: string;
  creation: string;
  groupChatOptions?: string;
  users: User[];
  groupChat: boolean;
}
