import { FC } from 'react';
import { View } from 'react-native';

import { FlashList } from '@shopify/flash-list';

import { ChatItem } from 'components/ChatItem/ChatItem';
import {
  EMPTY_SCREEN_ICON,
  EMPTY_SCREEN_ICON_SIZE,
  ESTIMATED_ITEM_SIZE,
} from 'components/ChatList/chatList.settings';
import { styles } from 'components/ChatList/chatList.styles';
import { ChatListProps } from 'components/ChatList/chatList.types';
import { EmptyContent } from 'components/EmptyContent/EmptyContent';

export const ChatList: FC<ChatListProps> = ({
  chats,
  onPressEmptyContent: handleEmptyContent,
  onPressAdditionalEmptyContent: handleAdditionalEmptyContent,
  emptyContentTitle,
  emptyContentDescription,
  emptyContentButtonTitle,
  emptyContentAdditionalButtonTitle,
}) => {
  return (
    <View style={styles.container}>
      {chats?.length ? (
        <FlashList
          data={chats}
          estimatedItemSize={ESTIMATED_ITEM_SIZE}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ChatItem {...item} />}
        />
      ) : (
        <EmptyContent
          additionalButtonTitle={emptyContentAdditionalButtonTitle}
          buttonTitle={emptyContentButtonTitle}
          description={emptyContentDescription}
          icon={EMPTY_SCREEN_ICON}
          iconSize={EMPTY_SCREEN_ICON_SIZE}
          onPress={handleEmptyContent}
          onPressAdditional={handleAdditionalEmptyContent}
          title={emptyContentTitle}
        />
      )}
    </View>
  );
};
