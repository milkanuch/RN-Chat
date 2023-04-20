import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';

export const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  tabBarStyle: {
    backgroundColor: COLORS.light.primary[400],
    borderTopWidth: 0,
    elevation: 0,
  },
});
