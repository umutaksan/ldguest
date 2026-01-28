import React from 'react';
import { Tabs } from 'expo-router';
import { theme } from '@/constants/theme';
import { Platform, View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Chrome as Home, Compass, BookOpen, Info, Phone } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';

export default function TabLayout() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();
  
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
          title: t('common.home'),
          tabBarTestID: 'tab-001',
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
          title: t('common.explore'),
          tabBarTestID: 'tab-002',
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
          title: t('common.guide'),
          tabBarTestID: 'tab-003',
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
          title: t('common.info'),
          tabBarTestID: 'tab-004',
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
          title: t('common.contact'),
          tabBarTestID: 'tab-005',
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