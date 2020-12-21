// import { useState, useEffect } from 'react';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
// import { useColorScheme } from 'react-native-appearance';
// import { useSelector } from 'react-redux';

// import { Theme } from '../enums/Theme';

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

export const useAppearance = () => {
  const scheme = useColorScheme();

  const isDark = scheme === 'dark';

  // const [activeMode, setActiveMode] = useState<any>();

  // const mode = useSelector((state: any) => state.theme.theme);

  // #5ac59a

  // const getActiveTheme = async () => {
  //   let theme = lightTheme;

  //   if (mode === Theme.Auto) {
  //     // console.log('auto');
  //     if (scheme === 'dark') {
  //       theme = darkTheme;
  //     } else {
  //       theme = lightTheme;
  //     }
  //   } else if (mode === Theme.Dark) {
  //     // console.log('dark');
  //     theme = darkTheme;
  //   } else if (mode === Theme.Light) {
  //     // console.log('light');
  //     theme = lightTheme;
  //   }

  //   setActiveMode(theme);
  // };

  // useEffect(() => {
  //   getActiveTheme();
  // }, [mode]);

  const activeMode = isDark ? darkTheme : lightTheme;

  return { activeMode, isDark };
};
