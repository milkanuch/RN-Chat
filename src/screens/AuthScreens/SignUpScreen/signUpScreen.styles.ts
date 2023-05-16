import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  biographyInput: {
    alignItems: 'flex-start',
    height: 100,
    padding: SIZES.XXS,
    textAlignVertical: 'top',
  },
  button: {
    borderRadius: SIZES.XXXS,
    borderStyle: 'dashed',
    borderWidth: 1,
    padding: SIZES.M,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  createButton: {
    alignItems: 'center',
    backgroundColor: COLORS.darkBlue,
    color: COLORS.green,
  },
  errorButton: {
    alignItems: 'center',
    backgroundColor: COLORS.darkBlue,
    color: COLORS.red,
  },
  image: {
    alignSelf: 'center',
    borderRadius: SIZES.XXXS,
    marginVertical: SIZES.M,
  },
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.L,
  },
  screenContainer: {
    flexGrow: 1,
  },
  subtitle: {
    padding: SIZES.XXXXL,
  },
});
