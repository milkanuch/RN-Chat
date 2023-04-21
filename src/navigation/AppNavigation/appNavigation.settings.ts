import { DefaultTheme } from '@react-navigation/native';

import { COLORS } from 'constants/color';

export const APP_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.light.primary[400],
  },
};
