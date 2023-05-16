import { useCallback, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { observer } from 'mobx-react-lite';

import { checkUserTokenStatus } from './src/helpers/checkUserTokenStatus';
import { useLoadFonts } from './src/hooks/useLoadFonts';
import { user } from './src/store/user/user';

import { AppNavigation } from 'navigation/AppNavigation/AppNavigation';

const App = observer(() => {
  const { isFontsLoaded } = useLoadFonts();

  const checkUserStatus = useCallback(async () => {
    const userTokenStatus = await checkUserTokenStatus();

    user.setIsRegistered(userTokenStatus);
  }, []);

  useEffect(() => {
    checkUserStatus();
  }, [checkUserStatus]);

  return !isFontsLoaded ? <ActivityIndicator /> : <AppNavigation />;
});

//NOTE: Due to expo specific, we need to disable this rule here
// eslint-disable-next-line import/no-default-export
export default App;
