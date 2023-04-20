import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';

import {
  ELLIPSIZE_MODE,
  LAST_MESSAGE_LABEL,
  MAX_LINES,
  MAX_UNREAD_MESSAGES,
  MAX_UNREAD_MESSAGES_LABEL,
} from 'components/ChatItem/chatItem.settings';
import { styles } from 'components/ChatItem/chatItem.styles';
import { ChatItemProps } from 'components/ChatItem/chatItem.types';

import { AppStackTypes } from 'navigation/AppStackNavigation/appStackNavigation.types';

export const ChatItem: FC<ChatItemProps> = ({
  id,
  username,
  lastMessage,
  lastMessageTime,
  isTyping,
  isOnline,
  unreadMessages,
  avatar,
}) => {
  const { navigate } = useNavigation();
  const handleOpenChat = () => navigate(AppStackTypes.ChatScreen, { id });

  return (
    <TouchableOpacity onPress={handleOpenChat} style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} />
        {!!isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{username}</Text>
          <Text style={[styles.dateTime, styles.text]}>{lastMessageTime}</Text>
        </View>
        <View style={styles.messageContainer}>
          {isTyping ? (
            <Text style={[styles.message, styles.text]}>
              {username} {LAST_MESSAGE_LABEL}
            </Text>
          ) : (
            <Text
              ellipsizeMode={ELLIPSIZE_MODE}
              numberOfLines={MAX_LINES}
              style={[styles.message, styles.text]}>
              {lastMessage}
            </Text>
          )}
          {!!unreadMessages && (
            <View style={styles.unreadMessagesContainer}>
              <Text style={[styles.text, styles.unreadMessages]}>
                {unreadMessages > MAX_UNREAD_MESSAGES
                  ? MAX_UNREAD_MESSAGES_LABEL
                  : unreadMessages}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
