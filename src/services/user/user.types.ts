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
export interface MessagesRequestParams {
  chatId: string;
  time?: Date | number;
}

export interface DuoChatWithUsers {
  id: string;
  name: string;
  creation: string;
  groupChatOptions?: string;
  users: User[];
  groupChat: boolean;
}
export interface GroupChatParams {
  name: string;
  password: string;
  privacyMode: boolean;
}

export interface FindUserParams {
  id: string;
}

export interface GroupChatResponseParams {
  id: number;
  name: string;
  membersCount: number;
  membersLimit: number;
}
