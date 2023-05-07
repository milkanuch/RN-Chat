import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { user } from 'store/user/user';

import { AppStackNavigation } from 'navigation/AppStackNavigation/AppStackNavigation';
import { AuthStackNavigation } from 'navigation/AuthStackNavigation/AuthStackNavigation';

import { APP_THEME } from './appNavigation.settings';

export const AppNavigation = () => {
  const isRegistered = user.getIsRegistered;

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer theme={APP_THEME}>
        {isRegistered ? <AppStackNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
