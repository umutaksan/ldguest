import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ViewStyle } from 'react-native';
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

  const cardWidth = theme.layout.isWeb && theme.layout.isDesktop 
    ? '32%' 
    : theme.layout.isWeb && theme.layout.isTablet 
    ? '45%' 
    : '48%';

  const cardHeight = theme.layout.isWeb 
    ? (theme.layout.isDesktop ? 120 : 110) 
    : 140;

  return (
    <Animated.View entering={FadeIn.delay(delay * 100)} style={[styles.container, { width: cardWidth }, style]}>
      <TouchableOpacity 
        style={[styles.card, { minHeight: cardHeight }]} 
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
    borderRadius: theme.layout.isWeb ? theme.borderRadius.s : theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...(theme.layout.isWeb ? {} : theme.shadows.small),
    ...(theme.layout.isWeb && {
      border: '1px solid #f0f0f0',
    }),
    // Web-specific hover effects
    ...(theme.layout.isWeb && {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      ':hover': {
        backgroundColor: '#fafafa',
        transform: 'translateY(-2px)',
      }
    }),
  },
  iconContainer: {
    width: theme.layout.isWeb ? (theme.layout.isDesktop ? 64 : 56) : 56,
    height: theme.layout.isWeb ? (theme.layout.isDesktop ? 64 : 56) : 56,
    borderRadius: theme.layout.isWeb ? theme.borderRadius.m : theme.borderRadius.round,
    backgroundColor: theme.layout.isWeb ? 'rgba(233, 184, 114, 0.1)' : theme.colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
  },
  title: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
    textAlign: 'center',
    lineHeight: theme.layout.isWeb ? 18 : 18,
    ...(theme.layout.isWeb && {
      fontSize: 14,
    }),
  },
});