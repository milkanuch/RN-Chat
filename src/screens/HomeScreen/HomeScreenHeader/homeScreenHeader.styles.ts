import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: COLORS.light.primary[400],
    borderBottomWidth: 0.8,
    borderColor: COLORS.lightGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 14,
  },
  logo: {
    color: COLORS.darkBlue,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
