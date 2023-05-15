import { FC } from 'react';
import { View, Text } from 'react-native';

import { ChatScreenProp } from 'navigation/AppStackNavigation/appStackNavigation.types';

export const ChatScreen: FC<ChatScreenProp> = ({ route }) => {
  const { id } = route.params;

  return (
    <View>
      <Text>ChatScreen{id}</Text>
    </View>
  );
};
