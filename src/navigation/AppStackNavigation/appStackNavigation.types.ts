import { StackScreenProps } from '@react-navigation/stack';

export enum AppStackTypes {
  ChatScreen = 'ChatScreen',
  AppBottomTabNavigation = 'AppBottomTabNavigation',
}

export type AppStackParamsList = {
  [AppStackTypes.ChatScreen]: undefined;
  [AppStackTypes.AppBottomTabNavigation]: undefined;
};

export type ChatScreenProp = StackScreenProps<
  AppStackParamsList,
  AppStackTypes.ChatScreen
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
