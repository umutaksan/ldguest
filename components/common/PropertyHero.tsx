import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Linking, Platform } from 'react-native';
import { theme } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft, Chrome as Home, Share, Heart } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

type PropertyHeroProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  showBackButton?: boolean;
};

export function PropertyHero({ title, subtitle, imageUrl, showBackButton = false }: PropertyHeroProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const handleHomePress = () => {
    router.replace('/');
  };

  const handleShare = async () => {
    try {
      if (Platform.OS === 'web') {
        if (navigator.share) {
          await navigator.share({
            title: title,
            text: `Check out this property: ${title}`,
            url: window.location.href,
          });
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
    }
  };
  
  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/ldguestmarbella');
  };
  
  return (
    <Animated.View 
      entering={FadeIn.duration(500)}
      style={styles.container}
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
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleHomePress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <ChevronLeft size={24} color={theme.colors.white} />
            </TouchableOpacity>
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
              <Text style={styles.subtitle}>{subtitle}</Text>
            )}
          </View>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
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
  },
  textContainer: {
    width: '100%',
  },
  title: {
    ...theme.typography.heading,
    color: theme.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});