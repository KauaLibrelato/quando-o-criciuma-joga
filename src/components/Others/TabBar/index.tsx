import * as Icon from 'phosphor-react-native';
import React from 'react';
import {Platform, View} from 'react-native';
import {theme} from '../../../styles/theme';
import * as Styles from './styles';
import {ITabBar} from './utils/types';

export function TabBar({state, descriptors, navigation}: ITabBar) {
  return (
    <Styles.Container>
      <View
        style={{
          marginBottom: Platform.OS === 'ios' ? 38 : 24,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 0,
          backgroundColor: theme.colors.white,
          flexDirection: 'row',
          borderRadius: 99,
          gap: 8,
          elevation: 10,
          shadowColor: theme.colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3.8,
        }}>
        {state.routes.map(
          (route: {key: string | number; name: string}, index: number) => {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <Styles.TabButton
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => onPress()}
                onLongPress={() => onLongPress()}
                activeOpacity={0.7}>
                <Styles.ButtonContainer>
                  <Styles.InsideButtonContainer isFocused={isFocused}>
                    {options.tabBarIcon === 'home' ? (
                      <Icon.HouseSimple
                        size={24}
                        color={
                          isFocused ? theme.colors.bgColor : theme.colors.black
                        }
                      />
                    ) : options.tabBarIcon === 'table' ? (
                      <Icon.Table
                        size={24}
                        color={
                          isFocused ? theme.colors.bgColor : theme.colors.black
                        }
                      />
                    ) : (
                      <Icon.SoccerBall
                        size={24}
                        color={
                          isFocused ? theme.colors.bgColor : theme.colors.black
                        }
                      />
                    )}
                  </Styles.InsideButtonContainer>
                </Styles.ButtonContainer>
              </Styles.TabButton>
            );
          },
        )}
      </View>
    </Styles.Container>
  );
}
