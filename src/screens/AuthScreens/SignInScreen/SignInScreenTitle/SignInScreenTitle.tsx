import { View, Text } from 'react-native';

import { styles } from './signInScreenTitle.styles';

export const SignInScreenTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authorization</Text>
    </View>
  );
};
