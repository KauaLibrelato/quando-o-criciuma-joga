import {useQuery} from '@tanstack/react-query';
import axios, {AxiosPromise} from 'axios';
import {isSameDay} from 'date-fns';
import {enumMatches} from '../../../utils/constants';
import {storageService} from '../../Table/utils/storageService';

async function getNextMatches(): AxiosPromise<MatchesResponse> {
  const matches = await axios.get<MatchesResponse>(String(process.env.API_URL));
  const tableData: TableData[] = await storageService.getItem('tableData');

  if (!tableData || !isSameDay(new Date(), new Date(tableData[0]?.update))) {
    storageService.setItem('tableData', matches.data?.tableData);
  }
  return matches;
}

export function useMatchesData() {
  const query = useQuery({
    queryKey: ['nextMatches'],
    queryFn: () => getNextMatches(),
  });
  return {
    ...query,
    data: query.data?.data,
  };
}

export const shouldShowOne = (
  data: MatchesResponse | undefined,
  switchValue: number,
) => {
  const {nextMatchesData, lastMatchesData} = data || {};
  if (switchValue === enumMatches.NEXT && nextMatchesData?.length === 1) {
    return true;
  } else if (
    switchValue === enumMatches.PREVIOUS &&
    lastMatchesData?.length === 1
  ) {
    return true;
  }

  return false;
};
