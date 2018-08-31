import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';

export const Input = props => (
  <TextInput
    onChangeText={props.action}
    secureTextEntry={props.secure || false}
    style={styles.input}
    placeholder={props.placeholder}
  />
);

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    marginHorizontal: 24,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 20,
    backgroundColor: '#eee',
    height: 46,
    width: Dimensions.get('window').width - 48,
    maxWidth: 400
  }
});
