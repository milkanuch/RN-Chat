import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from 'screens/HomeScreen/HomeScreen';

import { HOME_SCREEN_OPTIONS } from './homeStackNavigation.settings';
import {
  HomeStackParamsList,
  HomeStackScreenTypes,
} from './homeStackNavigation.types';

const Stack = createStackNavigator<HomeStackParamsList>();

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={HomeScreen}
        name={HomeStackScreenTypes.Home}
        options={HOME_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};
