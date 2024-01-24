import styled from 'styled-components/native';
import {theme} from '../../../styles/theme';

export const Container = styled.View`
  background-color: ${theme.colors.white};
  padding: 16px;
  border-radius: 16px;
`;

export const DayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Day = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  color: ${theme.colors.textColor};
`;

export const HourContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

export const Hour = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  color: ${theme.colors.textColor};
`;

export const MatchInfos = styled.View``;

export const Teams = styled.View``;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 70px;
  height: 70px;
`;

export const LogosContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
`;

export const TeamContainer = styled.View``;

export const XContainer = styled.View`
  margin: 0 16px;
`;

export const TeamText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${theme.colors.textColor};
`;

export const Championship = styled.Text`
  font-size: 16px;
  text-align: center;
  margin: 8px 0;
  color: ${theme.colors.textColor};
`;

export const StadiumContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StadiumText = styled.Text`
  font-size: 16px;
  margin-left: 8px;
  color: ${theme.colors.textColor};
`;

export const TimerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const InsideTimerContainer = styled.View`
  align-items: center;
`;

export const Time = styled.Text`
  font-size: 16px;
  color: ${theme.colors.textColor};
  font-weight: bold;
`;

export const TimeDescription = styled.Text`
  font-size: 12px;
  color: ${theme.colors.textColor};
  font-weight: bold;
`;

export const TwoPointsContainer = styled.View`
  margin: 0 10px;
`;

export const TwoPoints = styled.Text`
  color: ${theme.colors.textColor};
  font-size: 14px;
`;
