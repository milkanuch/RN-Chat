import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export enum BottomTabScreenTypes {
  HomeStack = 'HomeStack',
}

export type BottomTabParamsList = {
  [BottomTabScreenTypes.HomeStack]: undefined;
};

export type BottomTabTypeProp = BottomTabNavigationProp<
  BottomTabParamsList,
  BottomTabScreenTypes.HomeStack
>;
