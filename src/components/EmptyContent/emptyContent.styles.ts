import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';

export const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 32,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: COLORS.darkGrey,
    fontSize: 16,
  },
});
