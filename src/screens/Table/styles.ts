import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.bgColor};
`;

export const TableContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
