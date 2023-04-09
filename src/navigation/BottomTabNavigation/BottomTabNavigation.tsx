import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStackNavigation } from 'navigation/HomeStackNavigation/HomeStackNavigation';

import { HOME_STACK_OPTIONS } from './bottomTabNavigation.settings';
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
    </BottomTab.Navigator>
  );
};
