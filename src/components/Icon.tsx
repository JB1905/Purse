import React from 'react';
import { Icon as BaseIcon, IconProps, StyleSheet } from 'react-native-elements';
import { Platform } from 'react-native';

import { icons, categoryIcons } from '../constants/icons';

const Icon: React.FC<IconProps> = ({ type, name, ...props }) => (
  <BaseIcon
    {...props}
    name={
      Object.assign(icons, categoryIcons)[name][
        Platform.OS === 'ios' ? 'ios' : 'android'
      ]
    }
    type={type ?? Platform.OS === 'ios' ? 'ionicon' : 'material'}
  />
);

// const styles = StyleSheet.create({});

export default Icon;
