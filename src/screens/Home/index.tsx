import React, {useEffect, useRef, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {
  LastMatchCard,
  Loading,
  NextMatchCard,
  PrincipalNextMatchCard,
} from '../../components';
import {enumMatches} from '../../utils/constants';
import {storageService} from '../Table/utils';
import * as Styles from './styles';
import {
  setSwitchProps,
  shouldShowOne,
  switchOptions,
  useMatchesData,
} from './utils';

export function Home() {
  const {isLoading} = useMatchesData();
  const [switchValue, setSwitchValue] = useState(switchOptions[0].value);
  const [displayedItems, setDisplayedItems] = useState(3);
  const [data, setData] = useState<MatchesResponse>();
  const flatListRef = useRef<FlatList>(null);

  async function getData() {
    const dataInfos = await storageService.getItem('data');
    setData(dataInfos as MatchesResponse);
  }

  const switchProps = setSwitchProps({
    switchValue,
    setSwitchValue,
    setDisplayedItems,
  });

  const principalMatch = data?.nextMatchesData[0];

  const updateDisplayedItems = () => {
    setDisplayedItems(3);
    flatListRef.current?.scrollToOffset({animated: true, offset: 0});
  };

  const renderItem: ListRenderItem<MatchData> = ({item}) => {
    return (
      <>
        {switchValue === enumMatches.NEXT ? (
          <NextMatchCard data={item} one={shouldShowOne(data, switchValue)} />
        ) : (
          <LastMatchCard data={item} one={shouldShowOne(data, switchValue)} />
        )}
      </>
    );
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    updateDisplayedItems();
  }, [data, switchValue]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styles.Container>
          <Styles.Header>
            <PrincipalNextMatchCard {...principalMatch} />
          </Styles.Header>

          <Styles.SwitchContainer>
            <SwitchSelector {...switchProps} />
          </Styles.SwitchContainer>

          <Styles.Content>
            <FlatList
              ref={flatListRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.fixture.id.toString()}
              data={
                switchValue === enumMatches.NEXT
                  ? data?.nextMatchesData.slice(1, displayedItems)
                  : data?.lastMatchesData.slice(0, displayedItems)
              }
              renderItem={renderItem}
              onEndReached={() => setDisplayedItems(displayedItems + 3)}
              onEndReachedThreshold={0.1}
            />
          </Styles.Content>
        </Styles.Container>
      )}
    </>
  );
}
