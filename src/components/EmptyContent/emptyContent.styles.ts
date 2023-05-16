import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 2,
    marginTop: 32,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  gap: {
    padding: SIZES.XL,
  },
  text: {
    color: COLORS.darkGrey,
    fontSize: SIZES.XL,
    textAlign: 'center',
  },
  textContainer: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'flex-end',
  },
});
