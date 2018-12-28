import React from 'react';
import { Button, Dimensions } from 'react-native';
import styled from 'styled-components';

const Base = styled.TouchableHighlight`
  margin: 8px 0;
  padding: 2px 0;
  border-radius: 10px;
  background-color: #5ac59a;
  height: 44px;
  width: ${Dimensions.get('window').width - 26};
  max-width: 400px;
`;

export const Btn = props => (
  <Base>
    <Button {...props} />
  </Base>
);
