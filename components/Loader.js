import React from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import styled from 'styled-components';

const Base = styled.View`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #fffe;
  position: absolute;
  width: ${Dimensions.get('window').width};
`;

export const Loader = () => (
  <Base>
    <ActivityIndicator size="large" color="#5ac59a" />
  </Base>
);
