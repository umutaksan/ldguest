import React from 'react';
import { View, StyleSheet, ViewStyle, useWindowDimensions } from 'react-native';
import { theme } from '@/constants/theme';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  maxWidth?: number;
  centerContent?: boolean;
}

export function ResponsiveContainer({ 
  children, 
  style, 
  maxWidth = theme.layout.maxWidth,
  centerContent = true 
}: ResponsiveContainerProps) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 1024;
  
  return (
    <View style={[
      styles.container,
      {
        maxWidth,
        alignSelf: centerContent ? 'center' : 'stretch',
        paddingHorizontal: theme.layout.containerPadding,
        paddingHorizontal: isLargeScreen ? theme.spacing.xl : theme.spacing.m,
      }, 
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
});