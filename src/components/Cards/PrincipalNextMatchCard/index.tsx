import {format} from 'date-fns';
import * as Icon from 'phosphor-react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../../../styles/theme';
import * as Styles from './styles';
import {calculateTimeRemaining, compareDate} from './utils/functions';

export function PrincipalNextMatchCard({...data}) {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(new Date(data?.fixture.date)),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(new Date(data?.fixture.date)));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styles.Container>
      <Styles.DayContainer>
        <Icon.CalendarBlank
          weight="bold"
          size={24}
          color={theme.colors.textColor}
        />
        <Styles.Day>
          {format(data?.fixture.date, 'dd/MM/yyyy')}
          {compareDate(data?.fixture.date)
            ? ` - ${compareDate(data?.fixture.date)}`
            : ''}
        </Styles.Day>
      </Styles.DayContainer>

      <Styles.HourContainer>
        <Icon.Clock size={24} color={theme.colors.textColor} weight="fill" />
        <Styles.Hour>{format(data?.fixture.date, 'HH:mm')}h</Styles.Hour>
      </Styles.HourContainer>

      <Styles.TimerContainer>
        <Styles.InsideTimerContainer>
          <Styles.Time>{timeRemaining.days}</Styles.Time>
          <Styles.TimeDescription>Dias</Styles.TimeDescription>
        </Styles.InsideTimerContainer>

        <Styles.TwoPointsContainer>
          <Styles.TwoPoints>:</Styles.TwoPoints>
        </Styles.TwoPointsContainer>

        <Styles.InsideTimerContainer>
          <Styles.Time>{timeRemaining.hours}</Styles.Time>
          <Styles.TimeDescription>Horas</Styles.TimeDescription>
        </Styles.InsideTimerContainer>

        <Styles.TwoPointsContainer>
          <Styles.TwoPoints>:</Styles.TwoPoints>
        </Styles.TwoPointsContainer>

        <Styles.InsideTimerContainer>
          <Styles.Time>{timeRemaining.minutes}</Styles.Time>
          <Styles.TimeDescription>Minutos</Styles.TimeDescription>
        </Styles.InsideTimerContainer>

        <Styles.TwoPointsContainer>
          <Styles.TwoPoints>:</Styles.TwoPoints>
        </Styles.TwoPointsContainer>

        <Styles.InsideTimerContainer>
          <Styles.Time>{timeRemaining.seconds}</Styles.Time>
          <Styles.TimeDescription>Segundos</Styles.TimeDescription>
        </Styles.InsideTimerContainer>
      </Styles.TimerContainer>

      <Styles.MatchInfos>
        <Styles.Teams>
          <Styles.LogosContainer>
            <Styles.TeamContainer>
              <Styles.Image source={{uri: data?.teams?.home?.logo}} />
            </Styles.TeamContainer>

            <Styles.XContainer>
              <Icon.X size={32} weight="bold" color={theme.colors.textColor} />
            </Styles.XContainer>

            <Styles.TeamContainer>
              <Styles.Image source={{uri: data?.teams?.away?.logo}} />
            </Styles.TeamContainer>
          </Styles.LogosContainer>

          <Styles.TeamText>
            {data?.teams?.home?.name} X {data?.teams?.away?.name}
          </Styles.TeamText>
        </Styles.Teams>

        <Styles.Championship>
          {data?.league?.name?.split('-')[0]}
        </Styles.Championship>

        <Styles.StadiumContainer>
          <Styles.StadiumText>{data?.fixture?.venue?.name}</Styles.StadiumText>
        </Styles.StadiumContainer>
      </Styles.MatchInfos>
    </Styles.Container>
  );
}
