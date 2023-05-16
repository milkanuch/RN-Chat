import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SPACE_GROTESK_MEDIUM } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes';

const IMAGE_HEIGHT = 200;

const IMAGE_WIDTH = IMAGE_HEIGHT;

export const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.XXXS,
    borderStyle: 'dashed',
    borderWidth: 1,
    marginVertical: SIZES.S,
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
    borderRadius: SIZES.XXXS,
    marginVertical: SIZES.XL,
  },
  descriptionContainer: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    borderRadius: SIZES.XXXS,
    height: IMAGE_HEIGHT,
    marginVertical: SIZES.M,
    width: IMAGE_WIDTH,
  },
  input: {
    marginVertical: SIZES.S,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  privacyText: {
    ...SPACE_GROTESK_MEDIUM,
    color: COLORS.darkBlue,
    fontSize: SIZES.XL,
  },
  screen: {
    flex: 1,
    paddingHorizontal: SIZES.M,
  },
  subtitle: {
    padding: SIZES.XXXXL,
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
