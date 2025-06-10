import React from 'react';
import { Tabs } from 'expo-router';
import { theme } from '@/constants/theme';
import { Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Home, Compass, BookOpen, Info, Phone } from 'lucide-react-native';

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
        tabBarInactiveTintColor: '#555555',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
          height: tabBarHeight,
          paddingBottom: paddingBottom,
          paddingTop: 8,
          backgroundColor: theme.colors.white,
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
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarTestID: 'tab-001',
          tabBarIcon: ({ color, size }) => (
            <Home size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarTestID: 'tab-002',
          tabBarIcon: ({ color, size }) => (
            <Compass size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Guide',
          tabBarTestID: 'tab-003',
          tabBarIcon: ({ color, size }) => (
            <BookOpen size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarTestID: 'tab-004',
          tabBarIcon: ({ color, size }) => (
            <Info size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarTestID: 'tab-005',
          tabBarIcon: ({ color, size }) => (
            <Phone size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}