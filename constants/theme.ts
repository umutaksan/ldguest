import { Platform, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Responsive breakpoints
const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440,
};

// Check if current screen is mobile, tablet, or desktop
const isMobile = screenWidth < breakpoints.mobile;
const isTablet = screenWidth >= breakpoints.mobile && screenWidth < breakpoints.desktop;
const isDesktop = screenWidth >= breakpoints.desktop;
const isWeb = Platform.OS === 'web';

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

// Responsive spacing based on screen size
const getResponsiveSpacing = () => {
  if (isWeb && isDesktop) {
    return {
      xxs: 3,
      xs: 6,
      s: 10,
      m: 16,
      l: 24,
      xl: 32,
      xxl: 48,
    };
  } else if (isWeb && isTablet) {
    return {
      xxs: 2,
      xs: 5,
      s: 8,
      m: 14,
      l: 20,
      xl: 28,
      xxl: 40,
    };
  } else {
    return {
      xxs: 2,
      xs: 4,
      s: 8,
      m: 16,
      l: 24,
      xl: 32,
      xxl: 48,
    };
  }
};

// Responsive typography
const getResponsiveTypography = () => {
  const baseSize = isWeb && isDesktop ? 1 : isWeb && isTablet ? 0.95 : 1;
  
  return {
    heading: {
      fontFamily: 'PlayfairDisplay_700Bold',
      fontSize: Math.round(28 * baseSize),
      lineHeight: Math.round(34 * baseSize),
    },
    subheading: {
      fontFamily: 'Inter_700Bold',
      fontSize: Math.round(20 * baseSize),
      lineHeight: Math.round(24 * baseSize),
    },
    body: {
      fontFamily: 'Inter_400Regular',
      fontSize: Math.round(16 * baseSize),
      lineHeight: Math.round(24 * baseSize),
    },
    bodyMedium: {
      fontFamily: 'Inter_500Medium',
      fontSize: Math.round(16 * baseSize),
      lineHeight: Math.round(24 * baseSize),
    },
    bodySmall: {
      fontFamily: 'Inter_400Regular',
      fontSize: Math.round(14 * baseSize),
      lineHeight: Math.round(20 * baseSize),
    },
    caption: {
      fontFamily: 'Inter_400Regular',
      fontSize: Math.round(12 * baseSize),
      lineHeight: Math.round(16 * baseSize),
    },
    button: {
      fontFamily: 'Inter_600SemiBold',
      fontSize: Math.round(16 * baseSize),
      lineHeight: Math.round(24 * baseSize),
    },
    buttonTextMedium: {
      fontFamily: 'Inter_500Medium',
      fontSize: Math.round(14 * baseSize),
      lineHeight: Math.round(20 * baseSize),
    }
  };
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
  spacing: getResponsiveSpacing(),
  borderRadius: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    round: 9999,
  },
  typography: getResponsiveTypography(),
  shadows: {
    small: {
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    medium: {
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 4,
    },
    large: {
      shadowColor: palette.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
  },
  // Responsive utilities
  layout: {
    isWeb,
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    maxWidth: isWeb ? (isDesktop ? 1200 : isTablet ? 768 : 480) : screenWidth,
    containerPadding: isWeb ? (isDesktop ? 40 : isTablet ? 24 : 16) : 16,
  },
};