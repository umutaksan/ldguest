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
    ? '48%' 
    : theme.layout.isWeb && theme.layout.isTablet 
    ? '48%' 
    : '48%';

  const cardHeight = theme.layout.isWeb 
    ? (theme.layout.isDesktop ? 180 : 150) 
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
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
  },
  iconContainer: {
    width: theme.layout.isWeb ? (theme.layout.isDesktop ? 72 : 64) : 56,
    height: theme.layout.isWeb ? (theme.layout.isDesktop ? 72 : 64) : 56,
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
    lineHeight: theme.layout.isWeb ? 20 : 18,
    fontSize: theme.layout.isWeb ? (theme.layout.isDesktop ? 18 : 16) : 14,
    fontWeight: '600',
  },
});