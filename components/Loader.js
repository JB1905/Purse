import React from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions } from 'react-native';

export const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="#56ad97" />
  </View>
);

const styles = StyleSheet.create({
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffe',
    position: 'absolute',
    width: Dimensions.get('window').width
  }
});
