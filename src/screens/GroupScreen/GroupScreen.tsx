import { FC, useCallback, useEffect, useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { ChatItemProps } from 'components/ChatItem/chatItem.types';
import { ChatList } from 'components/ChatList/ChatList';
import { HomeScreenHeader } from 'components/HomeScreenHeader/HomeScreenHeader';

import { SAFE_AREA_VIEW_EDGES } from 'constants/insets';

import { getAllGroupChats } from 'services/user/user';

import {
  EMPTY_CONTENT_DESCRIPTION,
  EMPTY_CONTENT_MAIN_BUTTON,
  EMPTY_CONTENT_TITLE,
} from './groupScreen.settings';
import { styles } from './groupScreen.styles';
import {
  GroupScreenProps,
  GroupStackTypes,
} from 'navigation/GroupStackNavigation/groupStackNavigation.types';

export const GroupScreen: FC<GroupScreenProps> = ({ navigation }) => {
  const [groupChats, setGroupChats] = useState<ChatItemProps[]>([]);

  const fetchGroups = useCallback(async () => {
    const fetchGroupChats = await getAllGroupChats();

    setGroupChats(fetchGroupChats);
  }, []);

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups]);

  const handleCreateGroupChat = () => {
    navigation.navigate(GroupStackTypes.CreateGroupScreen);
  };

  const handleSearch = () => {
    //TODO: add search logic
  };

  return (
    <SafeAreaView edges={SAFE_AREA_VIEW_EDGES} style={styles.screen}>
      <HomeScreenHeader onPressSearch={handleSearch} />
      <ChatList
        chats={groupChats}
        emptyContentButtonTitle={EMPTY_CONTENT_MAIN_BUTTON}
        emptyContentDescription={EMPTY_CONTENT_DESCRIPTION}
        emptyContentTitle={EMPTY_CONTENT_TITLE}
        onPressEmptyContent={handleCreateGroupChat}
      />
    </SafeAreaView>
  );
};
