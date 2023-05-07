import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SPACE_GROTESK_BOLD } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.lightGrey,
    borderWidth: 1,
    bottom: SIZES.L,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  buttonLabel: {
    color: COLORS.darkBlue,
    textAlign: 'center',
    textAlignVertical: 'center',
    ...StyleSheet.absoluteFillObject,
    ...SPACE_GROTESK_BOLD,
  },
  container: {
    flex: 2,
  },
  countryCode: {
    backgroundColor: COLORS.light.primary[200],
    padding: SIZES.M,
  },
  disabledButtonLabel: {
    color: COLORS.darkBlue,
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
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.L,
  },
  titleContainer: {
    justifyContent: 'flex-end',
  },
});
