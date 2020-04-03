import React, { useEffect } from 'react';
import { registerRootComponent, AppLoading, SplashScreen } from 'expo';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import Layout from './screens';

import { AuthProvider } from './providers/AuthProvider';
import { SettingsProvider } from './providers/SettingsProvider';

import { useAppearance } from './hooks/useAppearance';

import { otaUpdates } from './config/otaUpdates';

const App: React.FC = () => {
  useEffect(() => {
    if (!__DEV__) otaUpdates();
  }, []);

  useEffect(() => {
    SplashScreen.preventAutoHide();
  }, []);

  enableScreens();

  const scheme = useColorScheme();

  const { getActiveTheme, lightTheme, darkTheme } = useAppearance();

  // return (
  //   <AppLoading
  //     startAsync={getActiveTheme}
  //     // onFinish={}
  //     // onError={}
  //   />
  // );

  return (
    <AuthProvider>
      <SettingsProvider>
        <SafeAreaProvider>
          <AppearanceProvider>
            <NavigationContainer
              theme={scheme === 'dark' ? darkTheme : lightTheme}
            >
              <Layout />
            </NavigationContainer>
          </AppearanceProvider>
        </SafeAreaProvider>
      </SettingsProvider>
    </AuthProvider>
  );
};

registerRootComponent(App);
