import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SPACE_GROTESK_REGULAR } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 4,
    justifyContent: 'center',
  },
  icon: {
    backgroundColor: COLORS.transparent,
    paddingHorizontal: SIZES.XXXS,
  },
  large: {
    padding: SIZES.L,
  },
  small: {
    padding: SIZES.S,
  },
  text: {
    color: COLORS.light.primary[200],
    fontSize: SIZES.XL,
    ...SPACE_GROTESK_REGULAR,
  },
});
