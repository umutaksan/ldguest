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
  primary: '#4A6FA5', // Modern blue
  primaryDark: '#385582',
  primaryLight: '#D0E0F7',
  secondary: '#2E8B98', // Keep teal as secondary
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
      xxs: 4,
      xs: 8,
      s: 12,
      m: 20,
      l: 32,
      xl: 48,
      xxl: 64,
    };
  } else if (isWeb && isTablet) {
    return {
      xxs: 3,
      xs: 6,
      s: 10,
      m: 18,
      l: 28,
      xl: 40,
      xxl: 56,
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
  const baseSize = isWeb && isDesktop ? 1.1 : isWeb && isTablet ? 1.05 : 1;
  
  // Web-specific typography
  if (isWeb) {
    return {
      heading: {
        fontFamily: 'Inter_700Bold',
        fontSize: Math.round(28 * baseSize),
        lineHeight: Math.round(34 * baseSize),
      },
      subheading: {
        fontFamily: 'Inter_600SemiBold',
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
  }
  
  // Mobile typography (unchanged)
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
  // Web-specific styles
  web: isWeb ? {
    card: {
      borderRadius: '8px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      border: '1px solid #f0f0f0',
      backgroundColor: '#ffffff',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    button: {
      borderRadius: '6px',
      padding: '10px 16px',
      fontWeight: 500,
      transition: 'all 0.2s ease',
    }
  } : undefined,
};