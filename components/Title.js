import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const Title = styled.Text`
  width: ${Dimensions.get('window').width - 26};
  max-width: 440px;

  ${({ main }) =>
    main
      ? `
    font-size: 70px;
    font-weight: 800;
    color: #5ac59a;
    margin: 12px 0 6px;
  `
      : `
    font-size: 24px;
    font-weight: 500;
    color: #97d8c2;
    margin-bottom: 18px;
  `}
`;
