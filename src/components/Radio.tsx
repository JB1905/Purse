import React from 'react';
import { CheckBox, CheckBoxProps } from 'react-native-elements';

const Radio: React.FC<CheckBoxProps> = ({ ...props }) => (
  <CheckBox {...props} />
);

export default Radio;
