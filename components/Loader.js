import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Dimensions } from 'react-native';

const Base = styled.View`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: #fffe;
  width: ${Dimensions.get('window').width};
`;

export const Loader = () => (
  <Base>
    <ActivityIndicator size="large" color="#5ac59a" />
  </Base>
);
