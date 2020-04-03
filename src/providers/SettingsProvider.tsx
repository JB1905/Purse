import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';

export const SettingsContext = React.createContext(null);

export const SettingsProvider = ({ children }) => {
  const [appearance, setAppearance] = useState(null);

  useEffect(() => {
    (async () => {
      setAppearance(JSON.parse(await AsyncStorage.getItem('appearance')));
    })();
  }, []);

  const updateAppearanceMode = async (mode: string) => {
    setAppearance(mode);

    await AsyncStorage.setItem('appearance', JSON.stringify(mode));
  };

  return (
    <SettingsContext.Provider value={{ appearance, updateAppearanceMode }}>
      {children}
    </SettingsContext.Provider>
  );
};
