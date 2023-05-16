import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { Icon } from 'components/Icon/Icon';

import { COLORS } from 'constants/color';

import { styles } from 'navigation/BottomTabNavigation/bottomTabNavigation.styles';

const ICON_SIZE = 22;

const ICON_NAME = {
  home: 'message',
  group: 'group',
};

const tabBarIcon = (focused: boolean, iconName: string) => (
  <Icon
    color={focused ? COLORS.blue : COLORS.grey}
    name={iconName}
    size={ICON_SIZE}
  />
);

export const HOME_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Chats',
  tabBarStyle: styles.tabBarStyle,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarIcon: ({ focused }) => tabBarIcon(focused, ICON_NAME.home),
};

export const GROUP_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Groups',
  tabBarStyle: styles.tabBarStyle,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarIcon: ({ focused }) => tabBarIcon(focused, ICON_NAME.group),
};
