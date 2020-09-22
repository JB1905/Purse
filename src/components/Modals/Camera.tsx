import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera as BaseCamera } from 'expo-camera';

const Camera = () => {
  return (
    <View style={{ flex: 1 }}>
      <BaseCamera style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        ></View>
      </BaseCamera>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default Camera;
