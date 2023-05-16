import { FC } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ChatItem } from 'components/ChatItem/ChatItem';
import { CustomButton } from 'components/CustomButton/CustomButton';

import {
  GO_BACK_BUTTON_ICON,
  GO_BACK_BUTTON_ICON_SIZE,
  IS_CHAT_ITEM_DISABLED,
  MORE_BUTTON_BUTTON_ICON,
  MORE_BUTTON_BUTTON_ICON_SIZE,
} from 'screens/ChatScreen/ChatScreenHeader/chatScreenHeader.settings';

import { DuoChatWithUsers, User } from 'services/user/user.types';

import { styles } from './chatScreenHeader.styles';

interface ChatScreenHeaderProps {
  user: User;
  chat: DuoChatWithUsers;
}

export const ChatScreenHeader: FC<ChatScreenHeaderProps> = ({ user, chat }) => {
  const { goBack } = useNavigation();
  const handleBack = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <CustomButton
          icon={GO_BACK_BUTTON_ICON}
          iconSize={GO_BACK_BUTTON_ICON_SIZE}
          onPress={handleBack}
          style={styles.icon}
        />
        <ChatItem
          avatar={user.avatar}
          disabled={IS_CHAT_ITEM_DISABLED}
          id={chat.id}
          userId={user.id}
          username={user.nickname}
        />
      </View>
      <CustomButton
        icon={MORE_BUTTON_BUTTON_ICON}
        iconSize={MORE_BUTTON_BUTTON_ICON_SIZE}
        style={styles.icon}
      />
    </View>
  );
};
