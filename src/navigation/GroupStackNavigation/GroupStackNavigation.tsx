import { createStackNavigator } from '@react-navigation/stack';

import { GroupScreen } from 'screens/GroupScreen/GroupScreen';

import { GROUP_SCREEN_OPTIONS } from './groupStackNavigation.settings';
import {
  GroupStackParamsList,
  GroupStackTypes,
} from './groupStackNavigation.types';

const Stack = createStackNavigator<GroupStackParamsList>();

export const GroupStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={GroupScreen}
        name={GroupStackTypes.GroupScreen}
        options={GROUP_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};
