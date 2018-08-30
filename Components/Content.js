import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export const Content = props => (
  <View style={styles.content}>{props.children}</View>
);

const styles = StyleSheet.create({
  content: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
