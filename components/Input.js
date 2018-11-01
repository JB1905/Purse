import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';

export const Input = props => (
  <TextInput
    onChangeText={props.action}
    autoCapitalize={props.autoCapitalize || null}
    autoCorrect={props.autoCorrect || null}
    secureTextEntry={props.secure || false}
    keyboardType={props.keyboardType || 'default'}
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
