import { TouchableOpacityProps } from 'react-native';

export interface ChatItemProps extends TouchableOpacityProps {
  id: string;
  userId: string;
  username: string;
  groupChat?: boolean;
  lastMessage?: string;
  lastMessageTime?: string;
  avatar: string;
  isOnline?: boolean;
  isTyping?: boolean;
  unreadMessages?: number;
}
