import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Wifi, Lock, Check } from 'lucide-react-native';
import { useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function WifiScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [copiedSSID, setCopiedSSID] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);
  const { width } = useWindowDimensions();

  // Get WiFi details based on property ID
  const getWifiDetails = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          ssid: 'OLIN_36407',
          password: '********'
        };
      case '29051502': // Seaview Fontanilla
        return {
          ssid: 'OLIN_60541',
          password: '********'
        };
      case '29051503': // Aloha Pueblo
        return {
          ssid: 'LDGUEST',
          password: '********'
        };
      case '29051504': // Old Town
        return {
          ssid: 'OLIN_38230',
          password: '********'
        };
      default:
        return {
          ssid: 'LDGUEST_WIFI',
          password: '********'
        };
    }
  };

  const wifiDetails = getWifiDetails();

  const copyToClipboard = async (text: string, type: 'ssid' | 'password') => {
    if (type === 'password') {
      Alert.alert(
        "Security Notice",
        "For security reasons, passwords are only visible to guests with active bookings. Please check your booking confirmation email or contact support for assistance.",
        [{ text: "OK" }]
      );
      return;
    }
    
    if (Platform.OS === 'web') {
      try {
        await navigator.clipboard.writeText(text);
        if (type === 'ssid') {
          setCopiedSSID(true);
          setTimeout(() => setCopiedSSID(false), 2000);
        }
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  const togglePasswordVisibility = () => {
    Alert.alert(
      "Security Notice",
      "For security reasons, passwords are only visible to guests with active bookings. Please check your booking confirmation email or contact support for assistance.",
      [{ text: "OK" }]
    );
  };

  // Determine if we're on a large screen
  const isLargeScreen = width > 1024;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="WiFi Details" />

      <View style={[
        styles.contentWrapper,
        isLargeScreen && styles.contentWrapperLarge
      ]}>
        <Animated.View 
          entering={FadeIn.duration(500)}
          style={styles.content}
        >
          <View style={styles.iconContainer}>
            <Wifi size={isLargeScreen ? 64 : 48} color={theme.colors.primary} />
          </View>

          <Text style={[styles.title, isLargeScreen && styles.titleLarge]}>Connect to WiFi</Text>
          <Text style={[styles.description, isLargeScreen && styles.descriptionLarge]}>
            Use these credentials to connect to the WiFi network in the apartment.
          </Text>

          <View style={[styles.detailsContainer, isLargeScreen && styles.detailsContainerLarge]}>
            <View style={styles.detailCard}>
              <Text style={styles.label}>Network Name (SSID)</Text>
              <View style={styles.valueContainer}>
                <Text style={[styles.value, isLargeScreen && styles.valueLarge]}>{wifiDetails.ssid}</Text>
                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={() => copyToClipboard(wifiDetails.ssid, 'ssid')}
                >
                  {copiedSSID ? (
                    <Check size={20} color={theme.colors.success} />
                  ) : (
                    <Text style={styles.copyText}>Copy</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.detailCard}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.valueContainer}>
                <Text style={[styles.value, isLargeScreen && styles.valueLarge]}>{wifiDetails.password}</Text>
                <TouchableOpacity
                  style={styles.lockButton}
                  onPress={togglePasswordVisibility}
                >
                  <Lock size={20} color={theme.colors.primary} />
                </TouchableOpacity>
              </View>
              <Text style={styles.securityNote}>
                For security reasons, the actual password is only visible to guests with active bookings.
              </Text>
            </View>
          </View>

          <View style={[styles.tipsContainer, isLargeScreen && styles.tipsContainerLarge]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  contentWrapperLarge: {
    paddingTop: theme.spacing.xl,
  },
  content: {
    flex: 1,
    padding: theme.spacing.m,
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.l,
    ...theme.shadows.medium,
  },
  title: {
    ...theme.typography.heading,
    marginBottom: theme.spacing.s,
    textAlign: 'center',
  },
  titleLarge: {
    fontSize: 32,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
    maxWidth: 300,
  },
  descriptionLarge: {
    fontSize: 18,
    maxWidth: 400,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: theme.spacing.xl,
  },
  detailsContainerLarge: {
    maxWidth: 450,
  },
  detailCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
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
  },
  valueLarge: {
    fontSize: 18,
  },
  copyButton: {
    width: 70,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.s,
  },
  copyText: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    fontWeight: '600',
  },
  lockButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: theme.spacing.s,
  },
  securityNote: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    fontStyle: 'italic',
    marginTop: theme.spacing.s,
  },
  tipsContainer: {
    width: '100%',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.l,
    ...theme.shadows.small,
  },
  tipsContainerLarge: {
    maxWidth: 450,
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