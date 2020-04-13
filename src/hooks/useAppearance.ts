import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

import { Theme } from '../enums/theme';

export const useAppearance = () => {
  const scheme = useColorScheme();

  const isDark = scheme === 'dark';

  const [mode, setMode] = useState<any>();

  // #5ac59a

  const primary = '#24b467';

  const lightTheme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary,
    },
  };

  const darkTheme = {
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary,
    },
  };

  const getActiveTheme = async () => {
    const mode = JSON.parse(await AsyncStorage.getItem('appearance'));

    let theme = lightTheme;

    if (mode === Theme.Auto) {
      console.log('auto');
      if (scheme === 'dark') {
        theme = darkTheme;
      } else {
        theme = lightTheme;
      }
    } else if (mode === Theme.Dark) {
      console.log('dark');
      theme = darkTheme;
    } else if (mode === Theme.Light) {
      console.log('light');
      theme = lightTheme;
    }

    setMode(theme);
  };

  useEffect(() => {
    getActiveTheme();
  }, []);

  return { mode, lightTheme, darkTheme, getActiveTheme, isDark };
};
