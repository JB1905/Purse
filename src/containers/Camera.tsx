import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera as BaseCamera } from 'expo-camera';

const Camera: React.FC = () => {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [type, setType] = useState(BaseCamera.Constants.Type.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await BaseCamera.requestPermissionsAsync();
  //     setHasPermission(status === 'granted');
  //   })();
  // }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }

  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (
    <View style={{ flex: 1 }}>
      <BaseCamera style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}
        >
          {/* <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === BaseCamera.Constants.Type.back
                  ? BaseCamera.Constants.Type.front
                  : BaseCamera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              Flip
            </Text>
          </TouchableOpacity> */}
        </View>
      </BaseCamera>
    </View>
  );
};

export default Camera;
