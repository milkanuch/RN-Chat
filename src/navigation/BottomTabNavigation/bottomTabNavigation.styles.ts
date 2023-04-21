import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: SIZES.M,
    fontWeight: 'bold',
  },
  tabBarStyle: {
    backgroundColor: COLORS.light.primary[400],
    borderTopWidth: 0,
    elevation: 0,
  },
});
