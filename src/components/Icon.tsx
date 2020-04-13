import React from 'react';
import { Icon, IconProps } from 'react-native-elements';
import { Platform } from 'react-native';

import { icons } from '../constants/icons';

const A: React.FC<IconProps> = ({ type, name, ...props }) => (
  <Icon
    {...props}
    name={icons[name][Platform.OS === 'ios' ? 'ios' : 'android']}
    type={type ?? Platform.OS === 'ios' ? 'ionicon' : 'material'}
  />
);

export default A;
