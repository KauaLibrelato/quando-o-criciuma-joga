import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../../styles/theme';
import {getBackgroundColorByRank, getBorderByRank} from './functions';

interface TableProps {
  data: string[];
  widthArr: number[];
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
}

interface TableRowProps {
  widthArr: number[];
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  data: string[];
}

const tableHeaderData = [
  'Classificação',
  'P',
  'J',
  'V',
  'E',
  'D',
  'GP',
  'GC',
  'SG',
  '%',
];

const columnWidths = [100, 30, 30, 30, 30, 30, 30, 30, 30, 40];

const tableHeaderStyles = {
  height: 40,
  backgroundColor: theme.colors.tableHeader,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const textHeaderStyle: TextStyle = {
  textAlign: 'center',
  color: theme.colors.textColor,
  fontWeight: 'bold' as 'bold',
};

export const tableHeaderProps: TableProps = {
  data: tableHeaderData || [],
  widthArr: columnWidths,
  style: tableHeaderStyles,
  textStyle: textHeaderStyle,
};

const textRowsStyle: StyleProp<TextStyle> = {
  textAlign: 'center',
  color: theme.colors.textColor,
};

const tableRowsStyle: (rank: number) => ViewStyle = rank => ({
  height: 40,
  backgroundColor: getBackgroundColorByRank(rank),
  borderBottomLeftRadius: getBorderByRank(rank),
  borderBottomRightRadius: getBorderByRank(rank),
});

export const tableRowProps: (rank: number, data: string[]) => TableRowProps = (
  rank,
  data,
) => ({
  widthArr: columnWidths,
  style: tableRowsStyle(rank),
  textStyle: textRowsStyle,
  data: data,
});
