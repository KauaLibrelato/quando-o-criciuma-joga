import {useQuery} from '@tanstack/react-query';
import axios, {AxiosPromise} from 'axios';
import {apiUrl} from '../../../utils/url';

async function getNextMatches(): AxiosPromise<MatchData> {
  const matches = axios.get<MatchData>(apiUrl);
  return matches;
}

export function useMatchesData() {
  const query = useQuery({
    queryKey: ['nextMatches'],
    queryFn: () => getNextMatches(),
  });
  return query;
}
