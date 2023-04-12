import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SPACE_GROTESK_REGULAR } from 'constants/fonts/fonts';

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
  large: {
    padding: 15,
  },
  small: {
    padding: 10,
  },
  text: {
    color: COLORS.light.primary[200],
    fontFamily: SPACE_GROTESK_REGULAR.fontFamily,
    fontSize: 16,
    fontWeight: SPACE_GROTESK_REGULAR.fontWeight,
  },
});
