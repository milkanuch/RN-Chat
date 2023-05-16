import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SPACE_GROTESK_REGULAR } from 'constants/fonts/fonts';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  composer: {
    marginBottom: 0,
    paddingLeft: 10,
  },
  container: {
    flex: 1,
  },
  inputToolbar: {
    borderRadius: SIZES.XXXL,
    borderTopWidth: 0,
    margin: 20,
  },
  inputToolbarPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  send: {
    justifyContent: 'center',
    paddingRight: 16,
  },
});
export const bubbleStyles = StyleSheet.create({
  left: {
    backgroundColor: COLORS.transparent,
  },
  right: {
    backgroundColor: COLORS.transparent,
  },
});

export const timeStyles = StyleSheet.create({
  left: {
    ...SPACE_GROTESK_REGULAR,
    color: COLORS.lightGrey,
  },
  right: {
    ...SPACE_GROTESK_REGULAR,
    color: COLORS.lightGrey,
  },
});

export const messageStyles = StyleSheet.create({
  left: {
    ...SPACE_GROTESK_REGULAR,
    backgroundColor: COLORS.light.primary[200],
    borderBottomEndRadius: SIZES.XS,
    borderBottomStartRadius: SIZES.XS,
    borderTopEndRadius: SIZES.XS,
    color: COLORS.darkBlue,
    padding: SIZES.XXS,
  },
  right: {
    ...SPACE_GROTESK_REGULAR,
    backgroundColor: COLORS.blueGrey,
    borderBottomEndRadius: SIZES.XS,
    borderBottomStartRadius: SIZES.XS,
    borderTopStartRadius: SIZES.XS,
    color: COLORS.light.primary[200],
    padding: SIZES.XXS,
  },
});
