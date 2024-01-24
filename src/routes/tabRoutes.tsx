import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, View} from 'react-native';
import {TabBar} from '../components';
import {Home} from '../screens';
import {theme} from '../styles/theme';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: '',
        headerLeft: () => <View />,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.bgColor,
          height: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
      tabBar={props => <TabBar {...props} />}>
      <Screen
        component={Home}
        name="Home"
        options={{
          tabBarIcon: 'home' as any,
        }}
      />

      <Screen
        component={Home}
        name="Table"
        options={{
          tabBarIcon: 'table' as any,
        }}
      />
    </Navigator>
  );
}
