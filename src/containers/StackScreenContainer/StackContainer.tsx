import { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StackContainerProps } from './stackContainer.types';
import { NAVIGATOR_SCREEN_OPTIONS } from 'containers/StackScreenContainer/stackContainer.settings';

const { Navigator, Screen } = createStackNavigator();

export const StackContainer: FC<StackContainerProps> = ({
  screen,
  screenName,
  screenOptions,
}) => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={NAVIGATOR_SCREEN_OPTIONS}>
        <Screen component={screen} name={screenName} options={screenOptions} />
      </Navigator>
    </NavigationContainer>
  );
};
