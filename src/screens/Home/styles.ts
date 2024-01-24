import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 16px;
  background-color: ${theme.colors.bgColor};
`;

export const Header = styled.View``;

export const SwitchContainer = styled.View`
  margin: 16px 0;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;

export const MatchesList = styled(FlatList)``;
