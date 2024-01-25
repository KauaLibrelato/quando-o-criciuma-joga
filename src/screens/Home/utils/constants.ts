import {theme} from '../../../styles/theme';

export const switchOptions = [
  {label: 'Próximos jogos', value: 0},
  {label: 'Últimos jogos', value: 1},
];

interface SwitchSelectorProps {
  switchValue: number;
  setSwitchValue: (value: number) => void;
  setDisplayedItems: (value: number) => void;
}

export const setSwitchProps = ({
  switchValue,
  setSwitchValue,
  setDisplayedItems,
}: SwitchSelectorProps) => ({
  options: switchOptions,
  initial: 0,
  selectedColor: theme.colors.textColor,
  textColor: theme.colors.textColor,
  buttonColor: theme.colors.tableHeader,
  value: switchValue,
  bold: true,
  hasPadding: true,
  valuePadding: 5,
  borderWidth: 0,
  style: {width: '80%', alignSelf: 'center'},
  activeOpacity: 0.8,
  onPress: (value: number) => {
    setSwitchValue(value);
    setDisplayedItems(3);
  },
});
