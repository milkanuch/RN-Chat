import { StackScreenProps } from '@react-navigation/stack';

import { SingUpScreenParams } from 'screens/AuthScreens/SignUpScreen/signUpScreen.types';

export enum AuthStackScreenTypes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export type AuthStackScreenParamsList = {
  [AuthStackScreenTypes.SignIn]: undefined;
  [AuthStackScreenTypes.SignUp]: SingUpScreenParams;
};

export type SignInScreenProps = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.SignIn
>;

export type SignUpScreenProps = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.SignUp
>;
