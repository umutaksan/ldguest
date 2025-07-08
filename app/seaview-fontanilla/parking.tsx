import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, Navigation, Car, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SeaviewParkingScreen() {
  const insets = useSafeAreaInsets();

  const handleOpenMaps = () => {
    const query = encodeURIComponent('Calle Camilo José Cela 7, Marbella');
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  const parkingOptions = [
    {
      id: 1,
      name: 'Street Parking',
      description: 'Limited street parking available on Calle Camilo José Cela and surrounding streets.',
      price: 'Paid parking zones',
      tips: ['Check parking signs for time limits', 'Use parking meters or mobile apps', 'Blue zones require payment during business hours']
    },
    {
      id: 2,
      name: 'Parking Fontanilla',
      description: 'Public parking area near Fontanilla Beach, within walking distance.',
      price: 'Hourly rates apply',
      tips: ['Popular during summer months', 'Early arrival recommended', 'Short walk to the apartment']
    },
    {
      id: 3,
      name: 'El Corte Inglés Parking',
      description: 'Underground parking at El Corte Inglés department store.',
      price: 'Hourly/daily rates',
      tips: ['Covered parking', 'Shopping validation available', '600m from apartment']
    }
  ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Parking Information" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Parking Information</Text>
            <Text style={styles.description}>
              The parking spaces inside the building are for property owners only, so unfortunately you cannot use them. However, there is open street parking available nearby, and a secure covered parking garage just a short walk away.
            </Text>

            <Text style={styles.sectionTitle}>Covered Parking Location:</Text>
            <TouchableOpacity 
              style={styles.parkingLinkButton}
              onPress={() => Linking.openURL('https://maps.app.goo.gl/tYCfj9GDWmo8A5hv9')}
              activeOpacity={0.8}
            >
              <Car size={20} color={theme.colors.white} />
              <Text style={styles.parkingLinkText}>Open Parking Garage Location</Text>
              <ExternalLink size={20} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
        </Animated.View>
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
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  directionsButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
  },
  directionsButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  parkingLinkButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.m,
    ...theme.shadows.small,
  },
  parkingLinkText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginHorizontal: theme.spacing.m,
  },
  parkingCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  parkingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  parkingInfo: {
    marginLeft: theme.spacing.m,
    flex: 1,
  },
  parkingName: {
    ...theme.typography.bodyMedium,
    marginBottom: 2,
  },
  parkingPrice: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
  },
  parkingDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  tipsContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.s,
    padding: theme.spacing.s,
  },
  tipsTitle: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.xs,
  },
  tip: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  generalTipsContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
});