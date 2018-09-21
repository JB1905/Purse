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
    marginHorizontal: 18,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 20,
    backgroundColor: '#eee',
    height: 44,
    width: Dimensions.get('window').width - 36,
    maxWidth: 400
  }
});
