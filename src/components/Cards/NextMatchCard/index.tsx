import {format} from 'date-fns';
import * as Icon from 'phosphor-react-native';
import React from 'react';
import {theme} from '../../../styles/theme';
import * as Styles from './styles';

export function NextMatchCard({one = false, data}: NextMatchCardProps) {
  return (
    <Styles.Container one={one}>
      <Styles.LeftContainer>
        <Styles.Image source={{uri: data?.teams?.home?.logo}} />
      </Styles.LeftContainer>
      <Styles.CenterContainer>
        <Styles.DayContainer>
          <Icon.CalendarBlank
            weight="bold"
            size={20}
            color={theme.colors.textColor}
          />
          <Styles.Day>{format(data?.fixture?.date, 'dd/MM/yyyy')}</Styles.Day>
        </Styles.DayContainer>

        <Styles.HourContainer>
          <Icon.Clock size={20} color={theme.colors.textColor} weight="fill" />
          <Styles.Hour>{format(data?.fixture?.date, 'HH:mm')}</Styles.Hour>
        </Styles.HourContainer>

        <Styles.StadiumContainer>
          <Icon.HouseSimple size={20} color={theme.colors.textColor} />
          <Styles.StadiumText>{data?.fixture?.venue?.name}</Styles.StadiumText>
        </Styles.StadiumContainer>

        <Styles.Championship>{data?.league?.name}</Styles.Championship>
      </Styles.CenterContainer>
      <Styles.RightContainer>
        <Styles.Image source={{uri: data?.teams?.away?.logo}} />
      </Styles.RightContainer>
    </Styles.Container>
  );
}
