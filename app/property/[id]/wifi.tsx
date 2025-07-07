import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Wifi, Copy, Check } from 'lucide-react-native';
import { useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function WifiScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [copiedSSID, setCopiedSSID] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);

  // Get WiFi details based on property ID
  const getWifiDetails = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          ssid: 'OLIN_36407',
          password: 'FPyPj3KN'
        };
      case '29051502': // Seaview Fontanilla
        return {
          ssid: 'OLIN_60541',
          password: 'Gnmj6f7J'
        };
      case '29051503': // Aloha Pueblo
        return {
          ssid: 'LDGUEST',
          password: 'ldguest2025'
        };
      case '29051504': // Old Town
        return {
          ssid: 'OLIN_38230',
          password: 'ghtcdEE9'
        };
      default:
        return {
          ssid: 'LDGUEST_WIFI',
          password: 'password123'
        };
    }
  };

  const wifiDetails = getWifiDetails();

  const copyToClipboard = async (text: string, type: 'ssid' | 'password') => {
    if (Platform.OS === 'web') {
      try {
        await navigator.clipboard.writeText(text);
        if (type === 'ssid') {
          setCopiedSSID(true);
          setTimeout(() => setCopiedSSID(false), 2000);
        } else {
          setCopiedPassword(true);
          setTimeout(() => setCopiedPassword(false), 2000);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="WiFi Details" />

      <Animated.View 
        entering={FadeIn.duration(500)}
        style={styles.content}
      >
        <View style={styles.iconContainer}>
          <Wifi size={48} color={theme.colors.primary} />
        </View>

        <Text style={styles.title}>Connect to WiFi</Text>
        <Text style={styles.description}>
          Use these credentials to connect to the WiFi network in the apartment.
        </Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailCard}>
            <Text style={styles.label}>Network Name (SSID)</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{wifiDetails.ssid}</Text>
              <TouchableOpacity
                style={styles.copyButton}
                onPress={() => copyToClipboard(wifiDetails.ssid, 'ssid')}
              >
                {copiedSSID ? (
                  <Check size={20} color={theme.colors.success} />
                ) : (
                  <Copy size={20} color={theme.colors.primary} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.detailCard}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.value}>{wifiDetails.password}</Text>
              <TouchableOpacity
                style={styles.copyButton}
                onPress={() => copyToClipboard(wifiDetails.password, 'password')}
              >
                {copiedPassword ? (
                  <Check size={20} color={theme.colors.success} />
                ) : (
                  <Copy size={20} color={theme.colors.primary} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.tipsContainer}>
          <Text style={styles.tipsTitle}>Connection Tips</Text>
          <Text style={styles.tipText}>• Make sure WiFi is enabled on your device</Text>
          <Text style={styles.tipText}>• Select the network name shown above</Text>
          <Text style={styles.tipText}>• Enter the password exactly as shown</Text>
          <Text style={styles.tipText}>• If you can't connect, try forgetting the network first</Text>
        </View>

        <Text style={styles.supportText}>
          Having trouble connecting? Contact our support team for assistance.
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    alignItems: 'center',
  },
  iconContainer: {
    width: theme.layout.isWeb ? 72 : 96,
    height: theme.layout.isWeb ? 72 : 96,
    borderRadius: theme.layout.isWeb ? 36 : 48,
    backgroundColor: theme.layout.isWeb ? 'rgba(233, 184, 114, 0.15)' : theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.layout.isWeb ? theme.spacing.m : theme.spacing.l,
    ...(theme.layout.isWeb ? {} : theme.shadows.medium),
  },
  title: {
    ...theme.typography.heading,
    marginBottom: theme.layout.isWeb ? theme.spacing.xs : theme.spacing.s,
    textAlign: 'center',
    ...(theme.layout.isWeb && {
      fontSize: 24,
    }),
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.layout.isWeb ? theme.spacing.l : theme.spacing.xl,
    maxWidth: 300,
    ...(theme.layout.isWeb && {
      fontSize: 14,
    }),
  },
  detailsContainer: {
    width: '100%',
    maxWidth: 400,
    marginBottom: theme.layout.isWeb ? theme.spacing.l : theme.spacing.xl,
  },
  detailCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.layout.isWeb ? theme.borderRadius.s : theme.borderRadius.m,
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    marginBottom: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    ...(theme.layout.isWeb ? {
      border: '1px solid #f0f0f0',
    } : theme.shadows.small),
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
  },
  value: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
  },
  copyButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.s,
  },
  tipsContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.layout.isWeb ? '#fafafa' : theme.colors.card,
    borderRadius: theme.layout.isWeb ? theme.borderRadius.s : theme.borderRadius.m,
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    marginBottom: theme.layout.isWeb ? theme.spacing.m : theme.spacing.l,
    ...(theme.layout.isWeb ? {
      border: '1px solid #f0f0f0',
    } : theme.shadows.small),
  },
  tipsTitle: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.s,
  },
  tipText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  supportText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    textAlign: 'center',
    maxWidth: 300,
  },
});