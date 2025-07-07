import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, Navigation, Car } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated'; 

export default function OldTownParkingScreen() {
  const insets = useSafeAreaInsets();

  const handleOpenMaps = () => {
    const query = encodeURIComponent('Calle Málaga, Marbella Old Town');
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  const parkingOptions = [
    {
      id: 1,
      name: 'Street Parking',
      description: 'Limited street parking available in the Old Town area.',
      price: 'Paid parking zones',
      tips: ['Check parking signs for time limits', 'Blue zones require payment during business hours', 'Very limited availability in historic center']
    },
    {
      id: 2,
      name: 'Parking Alameda',
      description: 'Public parking near Parque de la Alameda, short walk to Old Town.',
      price: 'Hourly rates apply',
      tips: ['5-minute walk to apartment', 'More availability than street parking', 'Well-lit and secure']
    },
    {
      id: 3,
      name: 'Parking Marbella Centro',
      description: 'Underground parking in Marbella center.',
      price: 'Daily/hourly rates',
      tips: ['Covered parking', '10-minute walk to Old Town', 'Available 24/7']
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
            <Text style={styles.sectionTitle}>Parking Near Your Apartment</Text>
            <Text style={styles.description}>
              This property does not have private parking.
              However, there are street parking options nearby.
              If you are looking for a covered parking garage, you can use the one shown in the map below:
            </Text>

            <View style={styles.mapContainer}>
              {Platform.OS === 'web' ? (
                <View 
                  style={styles.iframeContainer}
                  dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d400.86031951365055!2d-4.883279!3d36.508697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732786dfc1e9d9%3A0xf8635c896b0f37df!2sParking%20Parquesol!5e0!3m2!1str!2ses!4v1751890460090!5m2!1str!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                  }}
                />
              ) : (
                <TouchableOpacity
                  style={styles.mapPlaceholder}
                  onPress={handleOpenMaps}
                >
                  <Text style={styles.mapPlaceholderText}>Open Map</Text>
                  <MapPin size={24} color={theme.colors.primary} />
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity 
              style={styles.directionsButton}
              onPress={handleOpenMaps}
              activeOpacity={0.8}
            >
              <Navigation size={20} color={theme.colors.white} />
              <Text style={styles.directionsButtonText}>Get Directions to Parking</Text>
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
  mapContainer: {
    width: '100%',
    height: 450,
    marginVertical: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    ...theme.shadows.medium,
  },
  iframeContainer: {
    width: '100%',
    height: '100%',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.m,
    color: theme.colors.primary,
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
    marginLeft: theme.spacing.s
  },
});