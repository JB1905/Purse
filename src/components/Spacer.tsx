import React from 'react';
import { View } from 'react-native';

interface Props {
  readonly x: number;
  readonly y: number;
}

const Spacer: React.FC<Props> = ({ x = 12, y = 8 }) => (
  <View style={{ marginHorizontal: x, marginVertical: y }} />
);

export default Spacer;
