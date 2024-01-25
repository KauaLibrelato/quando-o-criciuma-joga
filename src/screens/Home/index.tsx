import React, {useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {
  LastMatchCard,
  Loading,
  NextMatchCard,
  PrincipalNextMatchCard,
} from '../../components';
import {enumMatches} from '../../utils/constants';
import * as Styles from './styles';
import {setSwitchProps, switchOptions} from './utils/constants';
import {shouldShowOne, useMatchesData} from './utils/functions';

export function Home() {
  const {data, isLoading} = useMatchesData();
  const [switchValue, setSwitchValue] = useState(switchOptions[0].value);
  const [displayedItems, setDisplayedItems] = useState(3);

  const switchProps = setSwitchProps({
    switchValue,
    setSwitchValue,
    setDisplayedItems,
  });

  const principalMatch = data?.nextMatchesData[0];

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
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item: any) => item.fixture.id.toString()}
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
