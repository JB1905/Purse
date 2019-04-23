import React from 'react';
import styled from 'styled-components/native';

const Base = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Message = styled.Text`
  text-align: center;
  margin: 8px 20px;
  font-size: 22px;
  font-weight: 600;
`;

const Info = styled.Text`
  margin: 0 20px;
  text-align: center;
  font-size: 18px;
`;

export const Splash = ({ message, info, children }) => (
  <Base>
    <Message>{message}</Message>
    {info && <Info>{info}</Info>}
    {children}
  </Base>
);
