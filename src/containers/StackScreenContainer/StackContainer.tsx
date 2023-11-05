import { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StackContainerProps } from './stackContainer.types';

export const StackContainer: FC<StackContainerProps> = ({
  screen,
  screenName,
  screenOptions,
}) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen component={screen} name={screenName} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
