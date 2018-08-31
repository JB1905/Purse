import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export const Content = props => (
  <View style={styles.content}>{props.children}</View>
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
