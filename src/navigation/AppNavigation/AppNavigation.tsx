import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import { AppStackNavigation } from 'navigation/AppStackNavigation/AppStackNavigation';

export const AppNavigation = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
