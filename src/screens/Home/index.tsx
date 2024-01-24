import React, {useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {
  LastMatchCard,
  Loading,
  NextMatchCard,
  PrincipalNextMatchCard,
} from '../../components';
import * as Styles from './styles';
import {setSwitchProps, switchOptions} from './utils/constants';
import {shouldShowOne, useMatchesData} from './utils/functions';

export function Home() {
  const {data, isLoading} = useMatchesData();
  const [switchValue, setSwitchValue] = useState(switchOptions[0].value);

  const switchProps = setSwitchProps({switchValue, setSwitchValue});

  const principalMatch = data?.nextMatchesData[0];

  const renderItem: ListRenderItem<MatchData> = ({item}) => {
    return (
      <>
        {switchValue === 'next' ? (
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
                switchValue === 'next'
                  ? data?.nextMatchesData.slice(1, 6)
                  : data?.lastMatchesData.slice(0, 6)
              }
              renderItem={renderItem}
            />
          </Styles.Content>
        </Styles.Container>
      )}
    </>
  );
}
