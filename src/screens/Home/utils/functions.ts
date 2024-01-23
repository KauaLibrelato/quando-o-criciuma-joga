import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {apiUrl} from '../../../utils/url';

async function getNextMatches() {
  const matches = axios.get(apiUrl);
  return matches;
}

export function useMatchesData() {
  const query = useQuery({
    queryKey: ['nextMatches'],
    queryFn: () => getNextMatches(),
  });
  return query;
}
