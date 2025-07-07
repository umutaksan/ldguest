import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { ChevronRight } from 'lucide-react-native';
import { theme } from '@/constants/theme';

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
        style={[styles.container, onPress && styles.touchable, style]}
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
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  touchable: {
    borderColor: theme.colors.primaryLight,
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
    marginBottom: description ? theme.spacing.xs : 0,
  },
  description: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
});