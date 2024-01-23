import React from 'react';
import {Text} from 'react-native';
import * as Styles from './styles';
import {useMatchesData} from './utils/functions';

export function Home() {
  const {data} = useMatchesData();

  return (
    <Styles.Container>
      <Styles.Header />
      <Styles.Content>
        <Styles.MatchesList
          horizontal
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any) => item.id}
          data={[]}
          renderItem={({item}: any) => <Text>{item.id}</Text>}
        />
      </Styles.Content>
    </Styles.Container>
  );
}
