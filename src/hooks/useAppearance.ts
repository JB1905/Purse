import { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native-appearance';

import { Theme } from '../enums/theme';

export const useAppearance = () => {
  const scheme = useColorScheme();

  const isDark = scheme === 'dark';

  // const [mode, setMode] = useState<any>();

  // useEffect(() => {
  //   (async () => {
  //     setMode();
  //   })();
  // }, []);

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
    const mode = await AsyncStorage.getItem('appearance');

    if (mode === Theme.AUTO) {
      console.log('auto');
      if (scheme === 'dark') {
        return darkTheme;
      } else {
        return lightTheme;
      }
    } else if (mode === Theme.DARK) {
      console.log('dark');
      return darkTheme;
    } else if (mode === Theme.LIGHT) {
      console.log('light');
      return lightTheme;
    }

    return lightTheme;
  };

  return { lightTheme, darkTheme, getActiveTheme, isDark };
};
