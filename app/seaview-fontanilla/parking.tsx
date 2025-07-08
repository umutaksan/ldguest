import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Car, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SeaviewParkingScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Parking Information" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>General Parking Tips</Text>
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
              <Text style={styles.parkingLinkText}>Open Parking Garage Location (video)</Text>
              <ExternalLink size={20} color={theme.colors.white} />
            </TouchableOpacity>
            
            <View style={styles.tipsSection}>
              <Text style={styles.sectionTitle}>General Parking Tips</Text>
              <View style={styles.generalTipsContainer}>
                <Text style={styles.tip}>• Download parking apps like EasyPark or Telpark</Text>
                <Text style={styles.tip}>• Blue zones require payment Monday-Friday 9:00-14:00 & 17:00-20:00</Text>
                <Text style={styles.tip}>• Saturday mornings also require payment in some areas</Text>
                <Text style={styles.tip}>• Always check parking signs for specific regulations</Text>
                <Text style={styles.tip}>• Keep valuables out of sight in your vehicle</Text>
              </View>
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
  tipsSection: {
    marginTop: theme.spacing.l,
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
  generalTipsContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
  tip: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
});