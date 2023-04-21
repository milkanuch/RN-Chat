import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { AppStackNavigation } from 'navigation/AppStackNavigation/AppStackNavigation';

import { APP_THEME } from './appNavigation.settings';

export const AppNavigation = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer theme={APP_THEME}>
        <AppStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
