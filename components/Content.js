import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export const Content = ({ children }) => (
  <View style={styles.content}>{children}</View>
);

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#fdfdfd',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
