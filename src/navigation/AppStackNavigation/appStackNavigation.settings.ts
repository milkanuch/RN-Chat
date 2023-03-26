import { StackNavigationOptions } from '@react-navigation/stack';

export const DEFAULT_SCREEN_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

export const CHAT_SCREEN_OPTIONS: StackNavigationOptions = {
  presentation: 'modal',
  headerTitle: '',
  headerShown: false,
};
