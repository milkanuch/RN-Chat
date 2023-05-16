import { StackScreenProps } from '@react-navigation/stack';

import { ChatScreenParams } from 'screens/ChatScreen/chatScreen.types';

export enum AppStackTypes {
  ChatScreen = 'ChatScreen',
  CreateGroupScreen = 'CreateGroupScreen',
  AppBottomTabNavigation = 'AppBottomTabNavigation',
}

export type AppStackParamsList = {
  [AppStackTypes.ChatScreen]: ChatScreenParams;
  [AppStackTypes.CreateGroupScreen]: undefined;
  [AppStackTypes.AppBottomTabNavigation]: undefined;
};

export type ChatScreenProp = StackScreenProps<
  AppStackParamsList,
  AppStackTypes.ChatScreen
>;

export type CreateGroupScreenProp = StackScreenProps<
  AppStackParamsList,
  AppStackTypes.CreateGroupScreen
>;
//NOTE: This eslint rules is unnecessary here
//SOURCE: https://reactnavigation.org/docs/typescript/#organizing-types
declare global {
  //eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    //eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends AppStackParamsList {}
  }
}
