import React from 'react';
import { Icon } from 'react-native-elements';
import { Platform } from 'react-native';

import { icons } from '../constants/icons';

export default ({ type, name, ...props }) => {
  console.log(name, icons[name]);

  return (
    <Icon
      {...props}
      // icon={}
      type={type ?? Platform.OS === 'ios' ? 'ionicon' : 'material'}
    />
  );
};
