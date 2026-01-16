import React from 'react';
import { View, StyleSheet, ViewStyle, Platform } from 'react-native';
import { theme } from '@/constants/theme';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  maxWidth?: number;
  centerContent?: boolean;
  noPadding?: boolean;
}

export function ResponsiveContainer({
  children,
  style,
  maxWidth = theme.layout.maxWidth,
  centerContent = true,
  noPadding = false
}: ResponsiveContainerProps) {
  return (
    <View style={[
      styles.container,
      {
        maxWidth,
        alignSelf: centerContent ? 'center' : 'stretch',
        paddingHorizontal: noPadding ? 0 : theme.layout.containerPadding,
      },
      Platform.OS === 'web' && styles.webContainer,
      style
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  webContainer: {
    overflow: 'hidden',
  },
});