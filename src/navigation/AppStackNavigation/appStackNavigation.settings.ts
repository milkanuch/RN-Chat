import { StackNavigationOptions } from '@react-navigation/stack';

import { styles } from './appStackNavigation.styles';

export const DEFAULT_SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

export const CHAT_SCREEN_OPTIONS: StackNavigationOptions = {
  presentation: 'modal',
  headerTitle: '',
  headerShown: false,
};

export const CREATE_GROUP_SCREEN_OPTIONS: StackNavigationOptions = {
  presentation: 'modal',
  headerTitle: '',
  headerStyle: styles.createGroupHeader,
};
