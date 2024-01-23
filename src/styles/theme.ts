export const theme = {
  fonts: {
    primary300: 'Inter_300Light',
    primary400: 'Inter_400Regular',
    primary500: 'Inter_500Medium',
    primary600: 'Inter_600SemiBold',
    primary700: 'Inter_700Bold',
  } as const,

  colors: {
    bgColor: '#FACC15',
    black: '#000000',
    white: '#FFFFFF',
    textColor: '#2B2B2B',
    red: '#D5150B',
    green: '#20C634',
    tableRow: '#F1F5F9',
    tableHeader: '#CBD5E1',
  } as const,

  size: {
    xxsm: '0.25rem', // 4px
    xsm: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xlg: '2.5rem', // 40px
    xxlg: '3rem', // 48px
    xxxlg: '3.5rem', // 56px
    xxxxlg: '4rem', // 64px
  } as const,
};
