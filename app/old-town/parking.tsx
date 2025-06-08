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
            <Text style={styles.sectionTitle}>Parking in Old Town</Text>
            <Text style={styles.description}>
              Your Old Town apartment is located in Marbella's historic center where parking is very limited. Here are the best parking options available near Calle Málaga.
            </Text>

            <TouchableOpacity 
              style={styles.directionsButton}
              onPress={handleOpenMaps}
              activeOpacity={0.8}
            >
              <Navigation size={20} color={theme.colors.white} />
              <Text style={styles.directionsButtonText}>Get Directions to Apartment</Text>
            </TouchableOpacity>
          </View>

          {parkingOptions.map((option, index) => (
            <Animated.View 
              key={option.id}
              entering={FadeIn.delay(index * 200)}
              style={styles.parkingCard}
            >
              <View style={styles.parkingHeader}>
                <Car size={24} color={theme.colors.primary} />
                <View style={styles.parkingInfo}>
                  <Text style={styles.parkingName}>{option.name}</Text>
                  <Text style={styles.parkingPrice}>{option.price}</Text>
                </View>
              </View>
              
              <Text style={styles.parkingDescription}>{option.description}</Text>
              
              <View style={styles.tipsContainer}>
                <Text style={styles.tipsTitle}>Tips:</Text>
                {option.tips.map((tip, tipIndex) => (
                  <Text key={tipIndex} style={styles.tip}>• {tip}</Text>
                ))}
              </View>
            </Animated.View>
          ))}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>General Parking Tips</Text>
            <View style={styles.generalTipsContainer}>
              <Text style={styles.tip}>• Old Town has very limited parking - arrive early</Text>
              <Text style={styles.tip}>• Consider parking outside Old Town and walking</Text>
              <Text style={styles.tip}>• Blue zones require payment Monday-Friday 9:00-14:00 & 17:00-20:00</Text>
              <Text style={styles.tip}>• Saturday mornings also require payment in some areas</Text>
              <Text style={styles.tip}>• Always check parking signs for specific regulations</Text>
              <Text style={styles.tip}>• Keep valuables out of sight in your vehicle</Text>
            </View>
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