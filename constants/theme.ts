const palette = {
  primary: '#E9B872', // Warm sand
  primaryDark: '#D09B52',
  primaryLight: '#F7D8A6',
  secondary: '#2E8B98', // Teal
  secondaryDark: '#1D6B78',
  secondaryLight: '#68B4C1',
  accent: '#E67E4F', // Terracotta
  accentDark: '#C65E2F',
  accentLight: '#F1A686',
  success: '#4CAF50',
  warning: '#FFC107',
  error: '#F44336',
  black: '#222222',
  darkGray: '#555555',
  mediumGray: '#888888',
  lightGray: '#CCCCCC',
  extraLightGray: '#F5F5F5',
  white: '#FFFFFF',
};

export const theme = {
  colors: {
    primary: palette.primary,
    primaryDark: palette.primaryDark,
    primaryLight: palette.primaryLight,
    secondary: palette.secondary,
    secondaryDark: palette.secondaryDark,
    secondaryLight: palette.secondaryLight,
    accent: palette.accent,
    accentDark: palette.accentDark,
    accentLight: palette.accentLight,
    success: palette.success,
    warning: palette.warning,
    error: palette.error,
    background: palette.white,
    card: palette.white,
    surface: palette.extraLightGray,
    text: palette.black,
    textSecondary: palette.darkGray,
    textTertiary: palette.mediumGray,
    border: palette.lightGray,
    notification: palette.accent,
    iconActive: palette.primary,
    iconInactive: palette.lightGray,
    transparent: 'transparent',
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    round: 9999,
  },
  typography: {
    heading: {
      fontFamily: 'PlayfairDisplay_700Bold',
      fontSize: 28,
      lineHeight: 34,
    },
    subheading: {
      fontFamily: 'Inter_700Bold',
      fontSize: 20,
      lineHeight: 24,
    },
    body: {
      fontFamily: 'Inter_400Regular',
      fontSize: 16,
      lineHeight: 24,
    },
    bodyMedium: {
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      lineHeight: 24,
    },
    bodySmall: {
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      lineHeight: 20,
    },
    caption: {
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    button: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      lineHeight: 24,
    },
    buttonTextMedium: {
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      lineHeight: 20,
    }
  },
  shadows: {
    small: {
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};