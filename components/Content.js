import React from 'react';
import styled from 'styled-components/native';
import { KeyboardAvoidingView } from 'react-native';

export const Content = styled.View`
  ${({ keyboard }) => !keyboard && 'flex: 1;'}
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ contrast }) => contrast && 'background-color: #f2f2f6;'}
`;

export const KeyboardContent = ({ children }) => (
  <Content as={KeyboardAvoidingView} behavior="padding" enabled>
    <Content keyboard>{children}</Content>
  </Content>
);
