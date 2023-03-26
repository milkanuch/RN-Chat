import { StackScreenProps } from '@react-navigation/stack';

export enum AuthStackScreenTypes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export type AuthStackScreenParamsList = {
  [AuthStackScreenTypes.SignIn]: undefined;
  [AuthStackScreenTypes.SignUp]: undefined;
};

export type SignInScreenProp = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.SignIn
>;

export type SignUpScreenProp = StackScreenProps<
  AuthStackScreenParamsList,
  AuthStackScreenTypes.SignUp
>;
