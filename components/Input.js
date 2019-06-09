import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Input = styled.TextInput`
  margin: 8px 18px;
  padding: 4px 12px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #f2f2f6;
  height: 40px;
  width: ${Dimensions.get('window').width - 28};
  max-width: 440px;
`;
