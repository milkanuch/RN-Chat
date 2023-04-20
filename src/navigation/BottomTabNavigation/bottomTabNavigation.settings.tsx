import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { styles } from 'navigation/BottomTabNavigation/bottomTabNavigation.styles';

export const HOME_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Chats',
  tabBarStyle: styles.tabBarStyle,
  tabBarLabelStyle: styles.tabBarLabelStyle,
};
