import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Tabs = styled.View`
  background-color: #edeff1;
  height: 210px;
  width: ${Dimensions.get('window').width};
  max-width: 440px;
  margin-bottom: 6px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;
