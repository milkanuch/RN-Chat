import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  container: {
    borderBottomWidth: 0.4,
    borderColor: COLORS.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SIZES.XL,
    paddingBottom: SIZES.L,
  },
  logo: {
    color: COLORS.darkBlue,
    fontSize: SIZES.XXXL,
    fontWeight: 'bold',
  },
  username: {},
});
