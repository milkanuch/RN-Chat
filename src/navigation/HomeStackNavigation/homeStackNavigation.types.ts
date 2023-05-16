import { StackScreenProps } from '@react-navigation/stack';

export enum HomeStackScreenTypes {
  Home = 'Home',
}

export type HomeStackParamsList = {
  [HomeStackScreenTypes.Home]: undefined;
};

export type HomeScreenProps = StackScreenProps<
  HomeStackParamsList,
  HomeStackScreenTypes.Home
>;
