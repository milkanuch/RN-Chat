import { useLoadFonts } from './src/hooks/useLoadFonts';

import { AppNavigation } from 'navigation/AppNavigation/AppNavigation';

const App = () => {
  const { isFontsLoaded } = useLoadFonts();
  if (!isFontsLoaded) {
    return null;
  }
  return <AppNavigation />;
};
//NOTE: Due to expo specific, we need to disable this rule here
// eslint-disable-next-line import/no-default-export
export default App;
