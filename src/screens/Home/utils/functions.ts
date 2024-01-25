import {useQuery} from '@tanstack/react-query';
import axios, {AxiosPromise} from 'axios';
import {apiUrl} from '../../../utils/url';
import {storageService} from '../../Table/utils/storageService';

async function getNextMatches(): AxiosPromise<MatchesResponse> {
  const matches = await axios.get<MatchesResponse>(apiUrl);
  storageService.setItem('tableData', matches.data?.tableData);
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
  switchValue: string,
) => {
  const {nextMatchesData, lastMatchesData} = data || {};
  if (switchValue === 'next' && nextMatchesData?.length === 1) {
    return true;
  } else if (switchValue === 'previous' && lastMatchesData?.length === 1) {
    return true;
  }

  return false;
};
