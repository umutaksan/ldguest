import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, Navigation, Car } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AlohaPuebloParkingScreen() {
  const insets = useSafeAreaInsets();

  const handleOpenMaps = () => {
    const query = encodeURIComponent('Calle del Agua, Aloha, Marbella');
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  const parkingOptions = [
    {
      id: 1,
      name: 'Townhouse Parking',
      description: 'Private parking space available at the townhouse.',
      price: 'Included',
      tips: ['Secure private parking', 'Direct access to townhouse', 'No time restrictions']
    },
    {
      id: 2,
      name: 'Aloha Golf Club Parking',
      description: 'Additional parking available at the nearby golf club.',
      price: 'Free for guests',
      tips: ['Short walk to townhouse', 'Well-lit area', 'Security cameras']
    },
    {
      id: 3,
      name: 'Street Parking',
      description: 'Limited street parking available in the Aloha area.',
      price: 'Free',
      tips: ['Check local parking signs', 'Residential area parking', 'Keep valuables out of sight']
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
            <Text style={styles.sectionTitle}>Parking at Your Townhouse</Text>
            <Text style={styles.description}>
              Your Aloha Pueblo townhouse includes private parking, making it convenient and secure for your vehicle during your stay.
            </Text>

            <TouchableOpacity 
              style={styles.directionsButton}
              onPress={handleOpenMaps}
              activeOpacity={0.8}
            >
              <Navigation size={20} color={theme.colors.white} />
              <Text style={styles.directionsButtonText}>Get Directions to Townhouse</Text>
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
                <Text style={styles.tipsTitle}>Features:</Text>
                {option.tips.map((tip, tipIndex) => (
                  <Text key={tipIndex} style={styles.tip}>• {tip}</Text>
                ))}
              </View>
            </Animated.View>
          ))}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>General Parking Tips</Text>
            <View style={styles.generalTipsContainer}>
              <Text style={styles.tip}>• Your townhouse includes private parking space</Text>
              <Text style={styles.tip}>• Golf courses nearby have additional parking if needed</Text>
              <Text style={styles.tip}>• The area is generally safe for parking</Text>
              <Text style={styles.tip}>• Keep valuables out of sight in your vehicle</Text>
              <Text style={styles.tip}>• Lock your vehicle at all times</Text>
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