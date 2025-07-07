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
    backgroundColor: theme.layout.isWeb ? '#ffffff' : theme.colors.card,
    borderRadius: theme.layout.isWeb ? 8 : theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb ? {
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      border: '1px solid #f0f0f0',
    } : theme.shadows.small),
  },
  iconContainer: {
    marginRight: theme.spacing.m,
  },
  content: {
    flex: 1,
  },
  title: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
    ...(theme.layout.isWeb && {
      fontWeight: '500',
    }),
    marginBottom: theme.spacing.xs,
  },
  description: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    ...(theme.layout.isWeb && {
      fontSize: 14,
      lineHeight: 20,
    }),
  },
});