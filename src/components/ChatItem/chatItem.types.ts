export interface ChatItemProps {
  id: string;
  username: string;
  lastMessage: string;
  lastMessageTime: string;
  avatar: string;
  isOnline?: boolean;
  isTyping?: boolean;
  unreadMessages?: number;
}
