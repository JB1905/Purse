import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

export const Title = props => <Text style={styles.title}>{props.value}</Text>;

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    width: Dimensions.get('window').width - 48,
    maxWidth: 400,
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 6,
    color: '#56ad97'
  }
});
