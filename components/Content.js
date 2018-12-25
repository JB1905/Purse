import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components';

export const Content = styled.View`
  ${({ keyboard }) => !keyboard && 'flex: 1;'}
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ contrast }) => contrast && 'background-color: #eee;'}
`;

export const KeyboardContent = ({ children }) => (
  <Content as={KeyboardAvoidingView} behavior="padding" enabled>
    <Content keyboard>{children}</Content>
  </Content>
);
