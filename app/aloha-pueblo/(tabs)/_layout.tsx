import React from 'react';
import { Tabs } from 'expo-router';
import { theme } from '@/constants/theme';
import { Platform, View, Text } from 'react-native';
import { Chrome as Home, Compass, BookOpen, Info, Phone } from 'lucide-react-native';

export default function TabLayout() {
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
          borderTopWidth: 0,
          height: tabBarHeight,
          paddingBottom: theme.layout.isWeb ? 4 : paddingBottom,
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
          fontSize: 12,
          fontWeight: '500',
          lineHeight: 16,
        },
        tabBarItemStyle: {
          display: 'none', // Hide all tabs by default
        },
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: ({ focused }) => null, // Default empty icon
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Home size={24} color={color} />
            </View>
          ),
          tabBarItemStyle: {
            display: 'flex', // Show this tab
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Compass size={24} color={color} />
            </View>
          ),
          tabBarItemStyle: {
            display: 'flex', // Show this tab
          },
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Guide',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <BookOpen size={24} color={color} />
            </View>
          ),
          tabBarItemStyle: {
            display: 'flex', // Show this tab
          },
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Info size={24} color={color} />
            </View>
          ),
          tabBarItemStyle: {
            display: 'flex', // Show this tab
          },
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: 'center' }}>
              <Phone size={24} color={color} />
            </View>
          ),
          tabBarItemStyle: {
            display: 'flex', // Show this tab
          },
        }}
      />
    </Tabs>
  );
}