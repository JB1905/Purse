import React from 'react';
import {
  StyleSheet,
  Button,
  TouchableHighlight,
  Dimensions
} from 'react-native';

export const Btn = props => (
  <TouchableHighlight style={styles.btn}>
    <Button onPress={props.action} color={props.color} title={props.title} />
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  btn: {
    marginVertical: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#56ad97',
    height: 46,
    width: Dimensions.get('window').width - 48
  }
});
