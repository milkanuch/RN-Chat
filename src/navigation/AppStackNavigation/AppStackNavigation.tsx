import { createStackNavigator } from '@react-navigation/stack';

import { ChatScreen } from 'screens/ChatScreen/ChatScreen';
import { CreateGroupScreen } from 'screens/CreateGroupScreen/CreateGroupScreen';

import { BottomTabNavigation } from 'navigation/BottomTabNavigation/BottomTabNavigation';

import {
  CHAT_SCREEN_OPTIONS,
  CREATE_GROUP_SCREEN_OPTIONS,
  DEFAULT_SCREEN_OPTIONS,
} from './appStackNavigation.settings';
import { AppStackParamsList, AppStackTypes } from './appStackNavigation.types';

const Stack = createStackNavigator<AppStackParamsList>();

export const AppStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={BottomTabNavigation}
        name={AppStackTypes.AppBottomTabNavigation}
        options={DEFAULT_SCREEN_OPTIONS}
      />
      <Stack.Screen
        component={ChatScreen}
        name={AppStackTypes.ChatScreen}
        options={CHAT_SCREEN_OPTIONS}
      />
      <Stack.Screen
        component={CreateGroupScreen}
        name={AppStackTypes.CreateGroupScreen}
        options={CREATE_GROUP_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};
