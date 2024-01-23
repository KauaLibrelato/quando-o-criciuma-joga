import {NavigationProp, ParamListBase} from '@react-navigation/native';

export type TNavigation = NavigationProp & ParamListBase;

export interface ITabBar {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}
