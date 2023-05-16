import { StackScreenProps } from '@react-navigation/stack';

export enum GroupStackTypes {
  GroupScreen = 'GroupScreen',
  CreateGroupScreen = 'CreateGroupScreen',
}

export type GroupStackParamsList = {
  [GroupStackTypes.GroupScreen]: undefined;
  [GroupStackTypes.CreateGroupScreen]: undefined;
};

export type GroupScreenProps = StackScreenProps<
  GroupStackParamsList,
  GroupStackTypes.GroupScreen
>;
