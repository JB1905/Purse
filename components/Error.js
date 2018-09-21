import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const Error = props => <Text style={styles.error}>{props.message}</Text>;

const styles = StyleSheet.create({
  error: {
    color: '#f23030',
    marginVertical: 4
  }
});
