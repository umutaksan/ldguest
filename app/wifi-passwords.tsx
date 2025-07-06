import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Wifi, Copy, Check } from 'lucide-react-native';
import { useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function WifiPasswordsScreen() {
  const insets = useSafeAreaInsets();
  const [copiedSSID, setCopiedSSID] = useState<string | null>(null);
  const [copiedPassword, setCopiedPassword] = useState<string | null>(null);

  const properties = [
    {
      id: '29051501',
      name: 'Jardines Tropicales Puerto Banús',
      ssid: 'OLIN_36407',
      password: 'FPyPj3KN'
    },
    {
      id: '29051502',
      name: 'Seaview Playa de Fontanilla',
      ssid: 'OLIN_60541',
      password: 'Gnmj6f7J'
    },
    {
      id: '29051503',
      name: 'Aloha Pueblo Townhouse',
      ssid: 'LDGUEST',
      password: 'ldguest2025'
    },
    {
      id: '29051504',
      name: 'Marbella Old Town',
      ssid: 'OLIN_38230',
      password: 'ghtcdEE9'
    }
  ];

  const copyToClipboard = async (text: string, type: 'ssid' | 'password', id: string) => {
    if (Platform.OS === 'web') {
      try {
        await navigator.clipboard.writeText(text);
        if (type === 'ssid') {
          setCopiedSSID(id);
          setTimeout(() => setCopiedSSID(null), 2000);
        } else {
          setCopiedPassword(id);
          setTimeout(() => setCopiedPassword(null), 2000);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <PageHeader title="WiFi Passwords" showBackButton={true} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          Below are the WiFi credentials for all properties. Click on the copy button to copy the SSID or password.
        </Text>

        {properties.map((property, index) => (
          <Animated.View 
            key={property.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.propertyCard}
          >
            <Text style={styles.propertyName}>{property.name}</Text>
            
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Network Name (SSID):</Text>
                <View style={styles.valueContainer}>
                  <Text style={styles.value}>{property.ssid}</Text>
                  <TouchableOpacity
                    style={styles.copyButton}
                    onPress={() => copyToClipboard(property.ssid, 'ssid', property.id)}
                  >
                    {copiedSSID === property.id ? (
                      <Check size={18} color={theme.colors.success} />
                    ) : (
                      <Copy size={18} color={theme.colors.primary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Password:</Text>
                <View style={styles.valueContainer}>
                  <Text style={styles.value}>{property.password}</Text>
                  <TouchableOpacity
                    style={styles.copyButton}
                    onPress={() => copyToClipboard(property.password, 'password', property.id)}
                  >
                    {copiedPassword === property.id ? (
                      <Check size={18} color={theme.colors.success} />
                    ) : (
                      <Copy size={18} color={theme.colors.primary} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.m,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
    textAlign: 'center',
  },
  propertyCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  propertyName: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
    color: theme.colors.primary,
  },
  detailsContainer: {
    width: '100%',
  },
  detailRow: {
    marginBottom: theme.spacing.m,
  },
  label: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.s,
    padding: theme.spacing.s,
  },
  value: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
    flex: 1,
  },
  copyButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.s,
  },
});