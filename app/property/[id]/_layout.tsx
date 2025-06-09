import React from 'react';
import { Tabs } from 'expo-router';
import { theme } from '@/constants/theme';
import { Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TabLayout() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  const tabBarHeight = theme.layout.isWeb 
    ? (theme.layout.isDesktop ? 70 : 65) 
    : (Platform.OS === 'ios' ? 85 : 65);

  const paddingBottom = theme.layout.isWeb 
    ? 8 
    : (Platform.OS === 'ios' ? 25 : 5);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textTertiary,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
          height: tabBarHeight,
          paddingBottom: paddingBottom,
          paddingTop: 8,
          backgroundColor: theme.colors.background,
          ...theme.shadows.small,
          // Web-specific optimizations
          ...(theme.layout.isWeb && {
            position: 'sticky',
            bottom: 0,
            zIndex: 1000,
          }),
        },
        tabBarLabelStyle: {
          ...theme.typography.caption,
          marginTop: 4,
          fontSize: theme.layout.isWeb ? 12 : 11,
        },
        tabBarIconStyle: {
          marginTop: theme.layout.isWeb ? 4 : 2,
        },
        tabBarIcon: () => null, // Remove all icons
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarTestID: 'tab-001',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarTestID: 'tab-002',
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Guide',
          tabBarTestID: 'tab-003',
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarTestID: 'tab-004',
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarTestID: 'tab-005',
        }}
      />
    </Tabs>
  );
}