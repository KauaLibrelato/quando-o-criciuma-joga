import styled from 'styled-components/native';
import {theme} from '../../../styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.bgColor};
`;

export const Loading = styled.ActivityIndicator.attrs({
  animating: true,
  size: 'large',
  color: theme.colors.white,
})``;
