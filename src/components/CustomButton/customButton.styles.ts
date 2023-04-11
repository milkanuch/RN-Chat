import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 4,
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: COLORS.transparent,
    paddingHorizontal: 4,
  },
  text: {
    color: COLORS.light.primary[200],
    fontSize: 16,
    padding: 15,
  },
});
