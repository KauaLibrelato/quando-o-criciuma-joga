import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.bgColor};
  padding: 12px;
`;

export const ChampionshipTitle = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.textColor};
  margin-bottom: 16px;
`;

export const TableContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const View = styled.View`
  padding-bottom: 100px;
`;

export const RowsScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: -1px;
`;
