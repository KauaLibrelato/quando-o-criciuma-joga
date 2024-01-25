import React from 'react';
import {View} from 'react-native';
import * as Styles from './styles';
import {TabBarButton} from './utils/functionsWithComponents/TabBarButton';
import {ITabBar} from './utils/types';

export function TabBar({state, descriptors, navigation}: ITabBar) {
  return (
    <Styles.Container>
      <View style={Styles.viewStyles.contanerView}>
        {state.routes.map(
          (route: {key: string | number; name: string; index: number}) => (
            <TabBarButton
              key={route.key}
              route={route}
              descriptors={descriptors}
              state={state}
              navigation={navigation}
            />
          ),
        )}
      </View>
    </Styles.Container>
  );
}
