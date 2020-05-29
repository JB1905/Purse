import React from 'react';
import NativeColorPicker from 'native-color-picker';

interface Props {
  readonly colors: any;
}

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
    contentContainerStyle={{ alignItems: 'center' }}
  />
);

export default ColorPicker;
