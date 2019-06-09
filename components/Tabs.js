import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Tabs = styled.View`
  background-color: #f2f2f6;
  height: 210px;
  width: ${Dimensions.get('window').width};
  max-width: 440px;
  margin-bottom: 6px;
  border-bottom-width: 0.5px;
  border-bottom-color: #b2b2b2;
`;
