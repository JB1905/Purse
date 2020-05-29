import React from 'react';
import { SegmentedControlIOS } from 'react-native';

const SegmentedControl = ({ ...props }) => (
  <SegmentedControlIOS
    {...props}
    style={{
      // marginTop: 20,
      marginTop: 6,
      marginBottom: 6,
      alignSelf: 'center',
      maxWidth: 350,
      width: '100%',
    }}
  />
);

export default SegmentedControl;
