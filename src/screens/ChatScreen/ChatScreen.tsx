import React, { FC, useCallback, useEffect, useState } from 'react';

import { CompatClient, IStompSocket, Stomp } from '@stomp/stompjs/esm6';
import 'text-encoding-polyfill';
import {
  AvatarProps,
  Bubble,
  BubbleProps,
  Composer,
  ComposerProps,
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps,
  MessageText,
  MessageTextProps,
  Send,
  SendProps,
  Time,
  TimeProps,
} from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import SockJS from 'sockjs-client';

import { Icon } from 'components/Icon/Icon';

import { ChatScreenHeader } from 'screens/ChatScreen/ChatScreenHeader/ChatScreenHeader';
import {
  MAX_COMPOSER_HEIGHT,
  MIN_COMPOSER_HEIGHT,
  MIN_INPUT_TOOLBAR_HEIGHT,
  ON_END_REACHED_THRESHOLD,
  SEND_BUTTON_ICON,
  SEND_BUTTON_ICON_SIZE,
  SHOW_AVATAR_FOR_EVERY_MESSAGE,
} from 'screens/ChatScreen/chatScreen.settings';

import { COLORS } from 'constants/color';
import { SAFE_AREA_VIEW_EDGES } from 'constants/insets';

import { OPEN_SOCKET_URI } from 'services/sockets/sockets';
import { RECONNECT_TIMEOUT } from 'services/sockets/sockets.settings';
import { getStorageItem } from 'services/storage/storage';
import { storageKeys } from 'services/storage/storage.types';
import {
  getChatById,
  getMessages,
  getUserAvatarById,
  getUserId,
} from 'services/user/user';
import {
  DuoChatWithUsers,
  MessagesRequestParams,
  User,
} from 'services/user/user.types';

import {
  bubbleStyles,
  messageStyles,
  styles,
  timeStyles,
} from './chatScreen.styles';
import { ChatScreenProp } from 'navigation/AppStackNavigation/appStackNavigation.types';

export const ChatScreen: FC<ChatScreenProp> = ({ route }) => {
  const { id } = route.params;

  const [chat, setChat] = useState({} as DuoChatWithUsers);
  const [recipient, setRecipient] = useState({} as User);
  const [user, setUser] = useState({} as User);
  const [messages, setMessages] = useState([] as IMessage[]);
  let stompClient: CompatClient;

  const fetchData = useCallback(async () => {
    const [fetchChat, userId, data] = await Promise.all([
      getChatById(id),
      getUserId(),
      getMessages({ chatId: id }),
    ]);

    if (fetchChat && userId && data) {
      setChat(fetchChat);

      await connectToSocket(userId);
      const [fetchUser, fetchRecipient] =
        fetchChat.users[0].id === userId
          ? fetchChat.users
          : fetchChat.users.reverse();

      fetchUser.avatar = user.avatar = await getUserAvatarById(fetchUser.id);
      fetchRecipient.avatar = recipient.avatar = await getUserAvatarById(
        fetchRecipient.id,
      );
      setUser(fetchUser);
      setRecipient(fetchRecipient);
      const loadMessages: IMessage[] = [];

      data.messages.map(async message => {
        loadMessages.push({
          _id: message.id,
          text: message.body,
          createdAt: new Date(message.time),
          user: {
            _id: message.sender.id,
            name: message.sender.nickname,
          },
        });
      });
      setMessages(loadMessages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  const connectToSocket = async (userId: string) => {
    const socket: IStompSocket = new SockJS(OPEN_SOCKET_URI) as IStompSocket;
    const token = await getStorageItem(storageKeys.accessToken);
    const bearer = {
      Authorization: `Bearer ${token}`,
    };

    stompClient = Stomp.client(OPEN_SOCKET_URI);
    stompClient.webSocketFactory = () => socket;

    stompClient.connect(
      bearer,
      () => handleConnected(bearer, userId),
      () => stompFailureCallback(),
    );
  };

  const stompFailureCallback = function () {
    setTimeout(connectToSocket, RECONNECT_TIMEOUT);
  };

  const handleFetchMoreMessages = async () => {
    if (messages.length === 0) return;
    const requestParams: MessagesRequestParams = {
      chatId: id,
      time: messages[messages.length - 1].createdAt,
    };

    const fetchedMessages = await getMessages(requestParams);

    fetchedMessages.messages.map(message => {
      setMessages(previousMessages => [
        ...previousMessages,
        {
          _id: message.id,
          text: message.body,
          createdAt: new Date(message.time),
          user: {
            _id: message.sender.id,
            name: message.sender.nickname,
          },
        },
      ]);
    });
  };

  const handleConnected = (
    bearer: { Authorization: string },
    userId: string,
  ) => {
    stompClient.subscribe(
      `/duo-chat/${id}`,
      handlePublicMessageReceived,
      bearer,
    );
    stompClient.subscribe(
      `/user/${userId}/messages`,
      handlePublicMessageReceived,
      bearer,
    );
  };

  const handlePublicMessageReceived = () => {
    //TODO: implement
  };

  const handleSend = useCallback(
    async (messages: IMessage[]) => {
      if (!stompClient) return;

      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );

      const message = {
        chatId: id,
        body: messages[0].text,
      };
      const token = await getStorageItem(storageKeys.accessToken);
      const bearer = {
        Authorization: `Bearer ${token}`,
      };

      stompClient.send(`/app/duo-chat/send`, bearer, JSON.stringify(message));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id],
  );

  const renderMessageText: FC<MessageTextProps<IMessage>> = props => {
    return <MessageText {...props} containerStyle={messageStyles} />;
  };

  const renderTime: FC<TimeProps<IMessage>> = props => {
    return <Time {...props} timeTextStyle={timeStyles} />;
  };
  const renderBubble: FC<BubbleProps<IMessage>> = props => {
    return <Bubble {...props} wrapperStyle={bubbleStyles} />;
  };

  const renderInputToolbar: FC<InputToolbarProps<IMessage>> = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputToolbar}
        primaryStyle={styles.inputToolbarPrimary}
      />
    );
  };
  const renderComposer: FC<ComposerProps> = props => {
    return <Composer {...props} textInputStyle={styles.composer} />;
  };

  const renderSend: FC<SendProps<IMessage>> = props => {
    return (
      <Send {...props} containerStyle={styles.send}>
        <Icon
          color={COLORS.darkBlue}
          name={SEND_BUTTON_ICON}
          size={SEND_BUTTON_ICON_SIZE}
        />
      </Send>
    );
  };

  const renderAvatar: FC<AvatarProps<IMessage>> = () => {
    return null;
  };

  return (
    <SafeAreaView edges={SAFE_AREA_VIEW_EDGES} style={styles.container}>
      <ChatScreenHeader chat={chat} user={recipient} />
      <GiftedChat
        listViewProps={{
          onEndReachedThreshold: ON_END_REACHED_THRESHOLD,
          onEndReached: () => handleFetchMoreMessages(),
        }}
        maxComposerHeight={MAX_COMPOSER_HEIGHT}
        messages={messages}
        minComposerHeight={MIN_COMPOSER_HEIGHT}
        minInputToolbarHeight={MIN_INPUT_TOOLBAR_HEIGHT}
        onSend={messages => handleSend(messages)}
        renderAvatar={renderAvatar}
        renderBubble={renderBubble}
        renderComposer={renderComposer}
        renderInputToolbar={renderInputToolbar}
        renderMessageText={renderMessageText}
        renderSend={renderSend}
        renderTime={renderTime}
        showAvatarForEveryMessage={SHOW_AVATAR_FOR_EVERY_MESSAGE}
        user={{
          _id: user.id,
        }}
      />
    </SafeAreaView>
  );
};
