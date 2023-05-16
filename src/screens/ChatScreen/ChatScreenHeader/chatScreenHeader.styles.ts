import { StyleSheet } from 'react-native';

import { SIZES } from 'constants/sizes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.XXXL,
  },
  icon: {
    justifyContent: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
