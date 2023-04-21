import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SPACE_GROTESK_BOLD } from 'constants/fonts/fonts';

const MARGIN = 14;

export const styles = StyleSheet.create({
  button: {
    borderColor: COLORS.darkBlue,
    borderWidth: 1,
    bottom: MARGIN,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  buttonLabel: {
    color: COLORS.green,
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
    padding: 12,
  },
  disabledButtonLabel: {
    color: COLORS.red,
  },
  error: {
    color: COLORS.red,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  input: {
    backgroundColor: COLORS.light.primary[200],
    height: 44,
    paddingHorizontal: 4,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    color: COLORS.darkBlue,
    fontSize: 14,
  },
  phoneNumberContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  phoneNumberInput: {
    flex: 1,
    marginLeft: 10,
  },
  screen: {
    flex: 1,
    paddingHorizontal: MARGIN,
  },
  titleContainer: {
    justifyContent: 'flex-end',
  },
});
