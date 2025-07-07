import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, Platform } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';

type PageHeaderProps = {
  title: string;
  showBackButton?: boolean;
  style?: ViewStyle;
  rightComponent?: React.ReactNode;
  isHost?: boolean;
  onBackPress?: () => void;
};

export function PageHeader({ 
  title, 
  showBackButton = true, 
  style, 
  rightComponent, 
  isHost,
  onBackPress 
}: PageHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      // Check if we're in a property route
      if (pathname.includes('/property/')) {
        // Extract the property ID from the pathname
        const matches = pathname.match(/\/property\/([^\/]+)/);
        if (matches && matches[1]) {
          const propertyId = matches[1];
          router.replace(`/property/${propertyId}`);
          return;
        }
      }
      
      // Fallback to home if we can't determine the property
      router.replace('/');
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }, style]}>
      <View style={styles.content}>
        {showBackButton ? (
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <ChevronLeft size={24} color={theme.colors.text} />
          </TouchableOpacity>
        ) : (
          <View style={styles.backButtonPlaceholder} />
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          {isHost && <Text style={styles.hostBadge}>Host</Text>}
        </View>
        <View style={styles.rightContainer}>
          {rightComponent}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  content: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.m,
  },
  backButton: {
    marginRight: theme.spacing.s,
    // Web-specific styles
    ...(Platform.OS === 'web' && {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    }),
  },
  backButtonPlaceholder: {
    width: 24,
    marginRight: theme.spacing.s,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...theme.typography.subheading,
  },
  hostBadge: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.s,
    marginLeft: theme.spacing.s,
  },
  rightContainer: {
    marginLeft: theme.spacing.s,
  }
});