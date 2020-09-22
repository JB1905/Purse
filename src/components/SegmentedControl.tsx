import React from 'react';
// TODO deprecated
import { SegmentedControlIOS, StyleSheet } from 'react-native';
import {
  // SegmentedControlIOS,
  SegmentedControlProps,
} from '@react-native-community/segmented-control';

const SegmentedControl = (props: SegmentedControlProps) => (
  <SegmentedControlIOS
    {...props}
    style={StyleSheet.flatten([styles.control])}
  />
);

const styles = StyleSheet.create({
  control: {
    marginTop: 6,
    marginBottom: 6,
    alignSelf: 'center',
    maxWidth: 350,
    width: '100%',
  },
});

export default SegmentedControl;
