import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

export const SubTitle = ({ value }) => (
  <Text style={styles.subtitle}>{value}</Text>
);

const styles = StyleSheet.create({
  subtitle: {
    width: Dimensions.get('window').width - 36,
    maxWidth: 400,
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 18
  }
});
