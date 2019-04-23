import React from 'react';
import styled from 'styled-components/native';
import { Button, Dimensions } from 'react-native';

const Base = styled.TouchableHighlight`
  margin: 8px 0;
  border-radius: 10px;
  background-color: #5ac59a;
  height: 40px;
  width: ${Dimensions.get('window').width - 28};
  max-width: 440px;
`;

export const Btn = props => (
  <Base>
    <Button {...props} />
  </Base>
);
