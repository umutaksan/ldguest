import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking, Platform } from 'react-native';
import { theme } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft, Chrome as Home, Share, Heart, Building2 } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

type PropertyHeroProps = {
  title: string;
  subtitle?: string;
  registrationNumber?: string;
  imageUrl: string;
  showBackButton?: boolean;
  showPropertySwitcher?: boolean;
};

export function PropertyHero({ 
  title, 
  subtitle, 
  registrationNumber,
  imageUrl, 
  showBackButton = false, 
  showPropertySwitcher = true 
}: PropertyHeroProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const handleHomePress = () => {
    router.replace('/');
  };

  const handlePropertySwitcher = () => {
    router.push('/');
  };

  const handleShare = async () => {
    try {
      if (Platform.OS === 'web') {
        const shareData = {
          title: title,
          text: `Check out this property: ${title}`,
          url: window.location.href,
        };

        // Check if Web Share API is available and can share this data
        if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
          await navigator.share(shareData);
        } else if (navigator.share && !navigator.canShare) {
          // Fallback for browsers that have share but not canShare
          await navigator.share(shareData);
        } else {
          // Fallback for browsers that don't support Web Share API
          await navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      } else {
        // For mobile platforms, you would use Expo Sharing
        // import * as Sharing from 'expo-sharing';
        // await Sharing.shareAsync(window.location.href);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback to clipboard if sharing fails
      try {
        if (Platform.OS === 'web' && navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      } catch (clipboardError) {
        console.error('Error copying to clipboard:', clipboardError);
      }
    }
  };
  
  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/ldguestmarbella');
  };

  const heroHeight = theme.layout.isWeb 
    ? (theme.layout.isDesktop ? 400 : theme.layout.isTablet ? 350 : 300) 
    : 300;
  
  return (
    <Animated.View 
      entering={FadeIn.duration(500)}
      style={[styles.container, { height: heroHeight }]}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.5)', 'transparent', 'rgba(0,0,0,0.7)']}
          locations={[0, 0.4, 1]}
          style={[styles.gradient, { paddingTop: insets.top + theme.spacing.s }]}
        >
          <View style={styles.header}>
            {showPropertySwitcher ? (
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handlePropertySwitcher}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Building2 size={24} color={theme.colors.white} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleHomePress}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <ChevronLeft size={24} color={theme.colors.white} />
              </TouchableOpacity>
            )}
            <View style={styles.headerButtons}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleHomePress}
              >
                <Home size={24} color={theme.colors.white} />
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={handleShare}
              >
                <Share size={24} color={theme.colors.white} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={handleInstagramPress}
              >
                <Heart size={24} color={theme.colors.white} />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && (
              <View>
                <Text style={styles.subtitle}>{subtitle}</Text>
                {registrationNumber && (
                  <Text style={styles.registrationNumber}>{registrationNumber}</Text>
                )}
              </View>
            )}
          </View>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.m,
    paddingBottom: theme.spacing.l,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.s,
    // Web-specific styles
    ...(theme.layout.isWeb && {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    }),
  },
  textContainer: {
    width: '100%',
    maxWidth: theme.layout.maxWidth,
    alignSelf: 'center',
    paddingHorizontal: theme.layout.containerPadding,
  },
  title: {
    ...theme.typography.heading,
    color: theme.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: theme.spacing.xs,
    fontSize: theme.layout.isWeb ? (theme.layout.isDesktop ? 32 : 28) : 28,
  },
  subtitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  registrationNumber: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: theme.spacing.xs,
  },
});