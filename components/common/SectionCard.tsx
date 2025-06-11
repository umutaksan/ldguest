import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ViewStyle, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import Animated, { FadeIn } from 'react-native-reanimated';

type SectionCardProps = {
  title: string;
  icon: React.ReactNode;
  route?: string;
  style?: ViewStyle;
  delay?: number;
  onPress?: () => void;
};

export function SectionCard({ title, icon, route, style, delay = 0, onPress }: SectionCardProps) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (route) {
      router.push(route);
    }
  };

  return (
    <Animated.View entering={FadeIn.delay(delay * 100)} style={[styles.container, style]}>
      <TouchableOpacity 
        style={styles.card} 
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.s,
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
    // Web-specific hover effects
    ...(Platform.OS === 'web' && {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      }
    }),
    minHeight: 140,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.m,
  },
  title: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
    textAlign: 'center',
    lineHeight: 20,
  },
});