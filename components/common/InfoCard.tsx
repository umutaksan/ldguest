import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Animated, { FadeIn } from 'react-native-reanimated';

type InfoCardProps = {
  title: string;
  description?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
  style?: ViewStyle;
  showChevron?: boolean;
  delay?: number;
};

export function InfoCard({ 
  title, 
  description, 
  onPress, 
  icon, 
  style, 
  showChevron = true,
  delay = 0
}: InfoCardProps) {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <Animated.View entering={FadeIn.delay(delay * 100)}>
      <CardComponent
        style={[styles.container, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        {showChevron && onPress && (
          <ChevronRight size={20} color={theme.colors.textTertiary} />
        )}
      </CardComponent>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.l,
    }),
  },
  iconContainer: {
    marginRight: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      transform: 'scale(1.2)',
    }),
  },
  content: {
    flex: 1,
  },
  title: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 18,
      marginBottom: theme.spacing.s,
    }),
  },
  description: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 16,
    }),
  },
});