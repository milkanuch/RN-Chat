import { TouchableOpacityProps } from 'react-native';

import { ChatItemProps } from 'components/ChatItem/chatItem.types';

export interface ChatListProps {
  chats: ChatItemProps[];
  onPressEmptyContent: TouchableOpacityProps['onPress'];
  onPressAdditionalEmptyContent?: TouchableOpacityProps['onPress'];
  emptyContentTitle: string;
  emptyContentDescription: string;
  emptyContentButtonTitle: string;
  emptyContentAdditionalButtonTitle?: string;
}
