import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export enum BottomTabScreenTypes {
  HomeStack = 'HomeStack',
  GroupStack = 'GroupStack',
}

export type BottomTabParamsList = {
  [BottomTabScreenTypes.HomeStack]: undefined;
  [BottomTabScreenTypes.GroupStack]: undefined;
};

export type BottomTabTypeProp = BottomTabNavigationProp<
  BottomTabParamsList,
  BottomTabScreenTypes.HomeStack
>;
