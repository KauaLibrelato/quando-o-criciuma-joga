import {theme} from '../../../styles/theme';

export const switchOptions = [
  {label: 'Próximos jogos', value: 'next'},
  {label: 'Últimos jogos', value: 'previous'},
];

interface SwitchSelectorProps {
  switchValue: string;
  setSwitchValue: (value: string) => void;
}

export const setSwitchProps = ({
  switchValue,
  setSwitchValue,
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
  onPress: (value: string) => setSwitchValue(value),
});

