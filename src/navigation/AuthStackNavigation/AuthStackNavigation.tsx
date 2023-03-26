import { createStackNavigator } from '@react-navigation/stack';

import { SignInScreen } from 'screens/AuthScreens/SignInScreen/SignInScreen';
import { SignUpScreen } from 'screens/AuthScreens/SignUpScreen/SignUpScreen';

import {
  SIGNIN_SCREEN_OPTIONS,
  SIGNUP_SCREEN_OPTIONS,
} from './authStackNavigation.settings';
import {
  AuthStackScreenParamsList,
  AuthStackScreenTypes,
} from './authStackNavigation.types';

const Stack = createStackNavigator<AuthStackScreenParamsList>();

export const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SignInScreen}
        name={AuthStackScreenTypes.SignIn}
        options={SIGNIN_SCREEN_OPTIONS}
      />
      <Stack.Screen
        component={SignUpScreen}
        name={AuthStackScreenTypes.SignUp}
        options={SIGNUP_SCREEN_OPTIONS}
      />
    </Stack.Navigator>
  );
};
