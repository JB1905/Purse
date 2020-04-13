import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { AsyncStorage } from 'react-native';

export const useLocalAuth = () => {
  const [localAuth, setLocalAuth] = useState<boolean>(null);

  useEffect(() => {
    const checkDeviceAuthOptions = async () => {
      const isEnabled = await AsyncStorage.getItem('localAuthentication');

      const isSupported = await LocalAuthentication.hasHardwareAsync();

      // console.log(isEnabled, !isEnabled === true, isEnabled && isSupported);

      if (isEnabled && isSupported) {
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();

        setLocalAuth(isEnrolled);
      }
    };

    checkDeviceAuthOptions();
  }, []);

  const authenticateLocally = () => {
    LocalAuthentication.authenticateAsync()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { localAuth, authenticateLocally };
};
