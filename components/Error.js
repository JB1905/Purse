import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Error = ({ message }) => (
  <Text style={styles.error}>{message}</Text>
);

const styles = StyleSheet.create({
  error: {
    color: '#f23030',
    marginVertical: 4
  }
});
