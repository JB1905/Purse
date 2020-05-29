import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Maps: React.FC = () => {
  return (
    <MapView style={{ flex: 1 }}>
      {/* <Marker coordinate={coords} /> */}
    </MapView>
  );
};

export default Maps;
