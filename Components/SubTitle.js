import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

export const SubTitle = props => (
  <Text style={styles.subtitle}>{props.value}</Text>
);

const styles = StyleSheet.create({
  subtitle: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 24,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 22
  }
});
