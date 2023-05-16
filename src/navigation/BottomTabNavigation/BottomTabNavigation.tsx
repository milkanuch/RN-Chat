import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GroupStackNavigation } from 'navigation/GroupStackNavigation/GroupStackNavigation';
import { HomeStackNavigation } from 'navigation/HomeStackNavigation/HomeStackNavigation';

import {
  GROUP_STACK_OPTIONS,
  HOME_STACK_OPTIONS,
} from './bottomTabNavigation.settings';
import {
  BottomTabParamsList,
  BottomTabScreenTypes,
} from './bottomTabNavigation.types';

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

export const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        component={HomeStackNavigation}
        name={BottomTabScreenTypes.HomeStack}
        options={HOME_STACK_OPTIONS}
      />
      <BottomTab.Screen
        component={GroupStackNavigation}
        name={BottomTabScreenTypes.GroupStack}
        options={GROUP_STACK_OPTIONS}
      />
    </BottomTab.Navigator>
  );
};
