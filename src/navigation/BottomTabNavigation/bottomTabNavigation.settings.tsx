import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { Icon } from 'components/Icon/Icon';

import { COLORS } from 'constants/color';

export const HOME_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarLabel: 'Chats',
  tabBarStyle: {
    backgroundColor: COLORS.light.primary[400],
    borderTopWidth: 0,
    elevation: 0,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabBarIcon: ({ focused }) => {
    return (
      <Icon
        color={focused ? COLORS.blue : COLORS.grey}
        name="message"
        size={22}
      />
    );
  },
};
