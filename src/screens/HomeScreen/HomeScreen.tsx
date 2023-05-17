import React, { FC, useCallback, useState } from 'react';
import { Modal, View } from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChatItemProps } from 'components/ChatItem/chatItem.types';
import { ChatList } from 'components/ChatList/ChatList';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { ButtonSize } from 'components/CustomButton/customButton.types';
import { HomeScreenHeader } from 'components/HomeScreenHeader/HomeScreenHeader';
import { PhoneNumberInput } from 'components/PhoneNumberInput/PhoneNumberInput';

import {
  EMPTY_CONTENT_DESCRIPTION,
  EMPTY_CONTENT_MAIN_BUTTON,
  EMPTY_CONTENT_TITLE,
  HIDE_BUTTON_COLOR,
  IS_MODAL_TRANSPARENT,
  MODAL_HIDE_BUTTON_ICON,
  MODAL_HIDE_BUTTON_SIZE,
  MODAL_SEARCH_BUTTON_ICON,
  MODAL_SEARCH_BUTTON_SIZE,
} from 'screens/HomeScreen/homeScreen.settings';
import { styles } from 'screens/HomeScreen/homeScreen.styles';

import { SAFE_AREA_VIEW_EDGES } from 'constants/insets';

import {
  findUserByPhone,
  getAllDuoChats,
  getChatWithSpecificUser,
  getUserAvatarById,
  startDuoChat,
} from 'services/user/user';
import { DuoChatWithUsers, User } from 'services/user/user.types';

import { getFormattedPhoneNumber } from '../../utils/utils';

import { AppStackTypes } from 'navigation/AppStackNavigation/appStackNavigation.types';
import { HomeScreenProps } from 'navigation/HomeStackNavigation/homeStackNavigation.types';

export const HomeScreen: FC<HomeScreenProps> = () => {
  const [chats, setChats] = useState<ChatItemProps[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isUserFound, setIsUserFound] = useState(true);

  const fetchData = useCallback(async () => {
    const fetchDuoChats = await getAllDuoChats();

    for (let i = 0; i < fetchDuoChats.length; i++) {
      fetchDuoChats[i].lastMessageTime = new Date(
        fetchDuoChats[i].lastMessageTime as string,
      ).toLocaleDateString();
      if (!chats[i]?.avatar) {
        fetchDuoChats[i].avatar = await getUserAvatarById(
          fetchDuoChats[i].userId,
        );
      }
    }
    setChats(fetchDuoChats);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData]),
  );

  const handleSearchUser = () => {
    setModalVisible(true);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleSearchUserByPhone = async () => {
    const formattedPhoneNumber = getFormattedPhoneNumber(phoneNumber);
    let isUserFound = true;
    let user = {} as User;

    try {
      user = await findUserByPhone(formattedPhoneNumber);
    } catch (error) {
      isUserFound = false;
    }

    setIsUserFound(isUserFound);

    if (isUserFound) {
      let chat: DuoChatWithUsers;

      try {
        chat = await getChatWithSpecificUser(user.id);
      } catch (error) {
        const newChatId = await startDuoChat(user.id);

        chat = { id: newChatId } as DuoChatWithUsers;
      }
      handleOpenChat(chat.id);
      setModalVisible(!modalVisible);
    }
  };

  const handleCloseModal = () => setModalVisible(!modalVisible);

  const { navigate } = useNavigation();
  const handleOpenChat = (id: string) =>
    navigate(AppStackTypes.ChatScreen, { id });

  const handleChangePhoneNumber = (text: string) => setPhoneNumber(text);

  return (
    <SafeAreaView edges={SAFE_AREA_VIEW_EDGES} style={styles.container}>
      <HomeScreenHeader onPressSearch={handleOpenModal} />
      <Modal
        onRequestClose={handleOpenModal}
        transparent={IS_MODAL_TRANSPARENT}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomButton
              icon={MODAL_HIDE_BUTTON_ICON}
              iconSize={MODAL_HIDE_BUTTON_SIZE}
              onPress={handleCloseModal}
              style={styles.hideButton}
            />

            <PhoneNumberInput
              error={!isUserFound ? HIDE_BUTTON_COLOR : undefined}
              onChangeText={handleChangePhoneNumber}
              value={phoneNumber}
            />
            <CustomButton
              buttonType={ButtonSize.small}
              icon={MODAL_SEARCH_BUTTON_ICON}
              iconSize={MODAL_SEARCH_BUTTON_SIZE}
              onPress={handleSearchUserByPhone}
              style={styles.searchButton}
              title={'Search'}
            />
          </View>
        </View>
      </Modal>
      <ChatList
        chats={chats}
        emptyContentButtonTitle={EMPTY_CONTENT_MAIN_BUTTON}
        emptyContentDescription={EMPTY_CONTENT_DESCRIPTION}
        emptyContentTitle={EMPTY_CONTENT_TITLE}
        onPressEmptyContent={handleSearchUser}
      />
    </SafeAreaView>
  );
};
