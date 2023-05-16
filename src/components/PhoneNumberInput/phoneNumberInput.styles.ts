import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  countryCode: {
    backgroundColor: COLORS.light.primary[200],
    padding: SIZES.M,
  },
  error: {
    color: COLORS.red,
    fontSize: SIZES.M,
    fontWeight: 'bold',
    marginTop: SIZES.XXXS,
  },
  input: {
    backgroundColor: COLORS.light.primary[200],
    height: 44,
    paddingHorizontal: SIZES.XXXS,
  },
  inputContainer: {
    marginVertical: SIZES.S,
  },
  label: {
    color: COLORS.darkBlue,
    fontSize: SIZES.L,
  },
  phoneNumberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  phoneNumberInput: {
    flex: 1,
    marginLeft: SIZES.S,
  },
});
