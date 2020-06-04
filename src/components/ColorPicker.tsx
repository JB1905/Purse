import React from 'react';
import NativeColorPicker from 'native-color-picker';
import { Props } from 'native-color-picker/lib/interfaces/Props';

const ColorPicker: React.FC<Props> = ({ ...props }) => (
  <NativeColorPicker
    {...props}
    sort
    gradient
    shadow
    itemSize={46}
    markerType="border"
    markerDisplay="#fff"
    scrollEnabled={false}
    contentContainerStyle={{
      alignItems: 'center',
      paddingVertical: 12,
    }}
  />
);

export default ColorPicker;
