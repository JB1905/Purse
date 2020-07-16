import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera as BaseCamera } from 'expo-camera';

const Camera: React.FC = () => {
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

export default Camera;
