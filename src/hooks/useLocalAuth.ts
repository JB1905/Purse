import { useState, useEffect } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export const useLocalAuth = () => {
  const [localAuth, setLocalAuth] = useState<boolean>(null);

  useEffect(() => {
    const checkDeviceAuthOptions = async () => {
      const isSupported = await LocalAuthentication.hasHardwareAsync();

      if (isSupported) {
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
