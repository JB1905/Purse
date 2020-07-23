import React, { useEffect } from 'react';
import { SplashScreen } from 'expo';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';
import { enableScreens } from 'react-native-screens';

import Layout from './screens';

import { useAppearance } from './hooks/useAppearance';

import { otaUpdates } from './config/otaUpdates';

import { theme } from './constants/theme';

enableScreens();

const Main: React.FC = () => {
  useEffect(() => {
    if (!__DEV__) otaUpdates();
  }, []);

  useEffect(() => {
    SplashScreen.preventAutoHide();
  }, []);

  const { activeMode } = useAppearance();

  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <NavigationContainer theme={activeMode}>
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </NavigationContainer>
      </AppearanceProvider>
    </SafeAreaProvider>
  );
};

export default Main;
