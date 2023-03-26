import { StackNavigationOptions } from '@react-navigation/stack';

export enum HomeStackScreenTypes {
  Home = 'Home',
}

export type HomeStackParamsList = {
  [HomeStackScreenTypes.Home]: undefined;
};

export const HOME_SCREEN_OPTIONS: StackNavigationOptions = {
  headerShadowVisible: false,
};
