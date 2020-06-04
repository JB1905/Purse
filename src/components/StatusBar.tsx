import React, { useState, useEffect } from 'react';
import { StatusBar as BaseStatusBar, Platform, Dimensions } from 'react-native';
// import { BlurView } from 'expo-blur';
// import * as Constants from 'expo-constants';

import { useAppearance } from '../hooks/useAppearance';

interface Props {
  readonly isModal?: boolean;
}

const StatusBar: React.FC<Props> = ({ isModal }) => {
  const { isDark } = useAppearance();

  const [invert, setInvert] = useState(false);

  // watch this
  const isBigScreen = Dimensions.get('window').width >= 495;

  useEffect(() => {
    const adjustBarStyle = () => {
      setInvert(isDark);

      if (Platform.OS === 'ios' && !isBigScreen && isModal) {
        setInvert(true);
      }
    };

    adjustBarStyle();
  }, []);

  return (
    <>
      <BaseStatusBar
        barStyle={invert ? 'light-content' : 'dark-content'}
        animated
      />

      {/* <BlurView
        intensity={100}
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: Dimensions.get('window').width,
          height: Constants.default.statusBarHeight,
          zIndex: 100,
        }}
      /> */}
    </>
  );
};

export default StatusBar;
