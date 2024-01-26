import { theme } from '../../../styles/theme';
import { storageService } from './storageService';

export function calculateWinningPercentage(
  pointsEarned: number,
  totalPoints: number,
): number {
  const winningPercentage = (pointsEarned / totalPoints) * 100;
  return winningPercentage;
}

function getRowsTableData(item: TableData) {
  return [
    `${item?.team?.name.split('-')[0]}`,
    `${item?.points}`,
    `${item?.all?.played}`,
    `${item?.all?.win}`,
    `${item?.all?.draw}`,
    `${item?.all?.lose}`,
    `${item?.all?.goals?.for}`,
    `${item?.all?.goals?.against}`,
    `${item?.goalsDiff}`,
    `${Math.round(
      calculateWinningPercentage(item?.points, item?.all?.played * 3),
    )}`,
  ];
}

export async function getAllRowsTable() {
  const items: MatchesResponse = await storageService.getItem('data');

  return items.tableData.map((item: TableData) => {
    return getRowsTableData(item);
  });
}

export function getBackgroundColorByRank(rank: number) {
  if (rank <= 7) {
    return theme.colors.lowBlue;
  } else if (rank >= 10) {
    return theme.colors.lowRed;
  }
  return theme.colors.tableRow;
}

export function getBorderByRank(rank: number) {
  if (rank === 11) {
    return 8;
  }
  return 0;
}
