import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  error: {
    color: COLORS.red,
    fontSize: SIZES.M,
    fontWeight: 'bold',
    marginTop: SIZES.XXXS,
  },
  input: {
    padding: SIZES.XS,
    paddingLeft: SIZES.L,
  },
  inputContainer: {
    backgroundColor: COLORS.light.primary[200],
  },
  label: {
    color: COLORS.darkBlue,
    fontSize: SIZES.L,
    marginVertical: SIZES.XXXS,
  },
});
