import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {isSameDay} from 'date-fns';
import {showMessage} from 'react-native-flash-message';
import {enumMatches} from '../../../utils/constants';
import {storageService} from '../../Table/utils/storageService';

async function getNextMatches() {
  const lastCallFunction = await storageService.getItem('lastCallFunction');

  if (
    !lastCallFunction ||
    !isSameDay(new Date(JSON.parse(String(lastCallFunction))), new Date())
  ) {
    try {
      const matches = await axios.get<MatchesResponse>(
        String(process.env.API_URL),
      );
      storageService.setItem('data', matches.data);
      storageService.setItem('lastCallFunction', JSON.stringify(new Date()));
      return matches;
    } catch (error) {
      showMessage({type: 'danger', message: 'Erro ao buscar dados'});
      return {data: undefined};
    }
  }
  return {data: undefined};
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
