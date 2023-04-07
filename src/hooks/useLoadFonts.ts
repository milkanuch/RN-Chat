import { useFonts } from 'expo-font';

import { ICO_MOON } from 'constants/fonts/fonts';

export const useLoadFonts = () => {
  const [isFontsLoaded] = useFonts({
    IcoMoon: ICO_MOON,
  });
  return { isFontsLoaded };
};
