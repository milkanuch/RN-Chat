import { FC } from 'react';

import { StackNavigationOptions } from '@react-navigation/stack';

import { SignInScreenProps } from 'navigation/AuthStackNavigation/authStackNavigation.types';

export interface StackContainerProps {
  screen: FC<SignInScreenProps>;
  screenName: string;
  screenOptions?: StackNavigationOptions;
}
