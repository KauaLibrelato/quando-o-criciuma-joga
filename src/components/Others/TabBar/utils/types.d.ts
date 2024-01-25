import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {TouchableOpacityProps} from 'react-native';

type TNavigation = NavigationProp & ParamListBase;

export interface ITabBar {
  route: {key: string | number; name: string; index: number};
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export interface GetTabBarIconProps {
  options: BottomTabDescriptorMa;
  isFocused: boolean;
}

interface TabButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  onLongPress: () => void;
}
