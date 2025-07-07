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
    backgroundColor: theme.layout.isWeb ? theme.colors.white : theme.colors.card,
    borderRadius: theme.layout.isWeb ? theme.borderRadius.s : theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb ? {
      border: '1px solid #f0f0f0',
    } : theme.shadows.small),
    ...(theme.layout.isWeb && {
      transition: 'all 0.2s ease-in-out',
      ':hover': {
        backgroundColor: '#fafafa',
      }
    }),
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
    marginBottom: theme.layout.isWeb ? 2 : theme.spacing.xs,
    ...(theme.layout.isWeb && {
      fontSize: 15,
    }),
  },
  description: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    ...(theme.layout.isWeb && {
      fontSize: 13,
    }),
  },
});