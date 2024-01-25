import * as Icon from 'phosphor-react-native';
import React from 'react';
import {theme} from '../../../../../../styles/theme';
import {GetTabBarIconProps} from '../../types';

export function getTabBarIcon({options, isFocused}: GetTabBarIconProps) {
  let iconComponent;

  switch (options.tabBarIcon) {
    case 'home':
      iconComponent = (
        <Icon.HouseSimple
          size={24}
          color={isFocused ? theme.colors.bgColor : theme.colors.black}
        />
      );
      break;
    case 'table':
      iconComponent = (
        <Icon.Table
          size={24}
          color={isFocused ? theme.colors.bgColor : theme.colors.black}
        />
      );
      break;
    default:
      iconComponent = (
        <Icon.SoccerBall
          size={24}
          color={isFocused ? theme.colors.bgColor : theme.colors.black}
        />
      );
      break;
  }

  return iconComponent;
}
