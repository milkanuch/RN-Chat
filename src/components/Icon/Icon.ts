import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import {
  ICO_MOON_FONT_NAME,
  ICO_MOON_TTF_NAME,
} from 'components/Icon/Icon.settings';

import { ICO_MOON_SELECTION_JSON } from 'constants/fonts/fonts';

export const Icon = createIconSetFromIcoMoon(
  ICO_MOON_SELECTION_JSON,
  ICO_MOON_FONT_NAME,
  ICO_MOON_TTF_NAME,
);
