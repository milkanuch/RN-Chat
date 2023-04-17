import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';

export const styles = StyleSheet.create({
  input: {
    padding: 8,
    paddingLeft: 14,
  },
  inputContainer: {
    backgroundColor: COLORS.light.primary[200],
  },
  label: {
    color: COLORS.darkBlue,
    fontSize: 14,
    marginVertical: 5,
  },
});
