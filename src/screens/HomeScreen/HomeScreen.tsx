import { useState } from 'react';

import { FlashList } from '@shopify/flash-list';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChatItem } from 'components/ChatItem/ChatItem';
import { ChatItemProps } from 'components/ChatItem/chatItem.types';
import { EmptyContent } from 'components/EmptyContent/EmptyContent';

import { HomeScreenHeader } from 'screens/HomeScreen/HomeScreenHeader/HomeScreenHeader';
import {
  EMPTY_SCREEN_BUTTON_TITLE,
  EMPTY_SCREEN_DESCRIPTION,
  EMPTY_SCREEN_ICON,
  EMPTY_SCREEN_ICON_SIZE,
  EMPTY_SCREEN_TITLE,
  ESTIMATED_ITEM_SIZE,
  HOME_SCREEN_HEADER_TITLE,
  SAFE_AREA_VIEW_EDGES,
} from 'screens/HomeScreen/homeScreen.settings';
import { styles } from 'screens/HomeScreen/homeScreen.styles';

export const HomeScreen = () => {
  const [chats, setChats] = useState<ChatItemProps[]>([]);
  const handleEmptyContent = () => {
    setChats([]);
  };
  const handlePressSetting = () => {
    //TODO: implement
  };
  const handlePressSearch = () => {
    //TODO: implement
  };

  return (
    <SafeAreaView edges={[SAFE_AREA_VIEW_EDGES]} style={styles.container}>
      <HomeScreenHeader
        onPressSearch={handlePressSearch}
        onPressSetting={handlePressSetting}
        title={HOME_SCREEN_HEADER_TITLE}
      />
      {chats.length ? (
        <FlashList
          data={chats}
          estimatedItemSize={ESTIMATED_ITEM_SIZE}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ChatItem {...item} />}
        />
      ) : (
        <EmptyContent
          buttonTitle={EMPTY_SCREEN_BUTTON_TITLE}
          description={EMPTY_SCREEN_DESCRIPTION}
          icon={EMPTY_SCREEN_ICON}
          iconSize={EMPTY_SCREEN_ICON_SIZE}
          onPress={handleEmptyContent}
          title={EMPTY_SCREEN_TITLE}
        />
      )}
    </SafeAreaView>
  );
};
