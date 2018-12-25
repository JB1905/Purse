import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const Input = styled.TextInput`
  margin: 8px 18px;
  padding: 4px 12px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #eee;
  height: 44px;
  width: ${Dimensions.get('window').width - 26};
  max-width: 400px;
`;
