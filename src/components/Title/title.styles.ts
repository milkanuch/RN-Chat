import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/color';
import { SPACE_GROTESK_MEDIUM } from 'constants/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: COLORS.darkBlue,
    fontSize: 24,
    marginBottom: 8,
    ...SPACE_GROTESK_MEDIUM,
  },
});
