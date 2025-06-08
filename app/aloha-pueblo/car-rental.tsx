import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Car, Shield, CreditCard, CircleCheck as CheckCircle2, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AlohaPuebloCarRentalScreen() {
  const insets = useSafeAreaInsets();

  const handleRentCar = () => {
    Linking.openURL('https://www.doyouspain.com/');
  };

  const benefits = [
    'Best price guarantee',
    'Full insurance coverage',
    'No hidden fees',
    'Free cancellation',
    '24/7 customer support',
    'Multiple pickup locations',
    'Wide range of vehicles',
    'Easy booking process'
  ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Car Rental" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.mainContent}>
            <Text style={styles.title}>Explore Golf Valley and Beyond</Text>
            <Text style={styles.description}>
              Discover the freedom of exploring Costa del Sol with your own rental car. From visiting multiple golf courses to scenic coastal drives, make the most of your stay at Aloha Pueblo with a reliable vehicle from our trusted partner.
            </Text>

            <View style={styles.benefitsContainer}>
              <Text style={styles.benefitsTitle}>Why Choose Our Partner?</Text>
              <View style={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <View key={index} style={styles.benefitItem}>
                    <CheckCircle2 size={16} color={theme.colors.success} />
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>
            </View>

            <TouchableOpacity 
              style={styles.rentButton}
              onPress={handleRentCar}
              activeOpacity={0.8}
            >
              <Car size={20} color={theme.colors.white} />
              <Text style={styles.rentButtonText}>Find Your Perfect Car</Text>
              <ExternalLink size={20} color={theme.colors.white} />
            </TouchableOpacity>

            <Text style={styles.note}>
              *Prices and availability may vary depending on season and demand
            </Text>
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
    paddingBottom: theme.spacing.xl,
  },
  mainContent: {
    padding: theme.spacing.m,
  },
  title: {
    ...theme.typography.heading,
    marginBottom: theme.spacing.s,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
  },
  benefitsContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.l,
    ...theme.shadows.small,
  },
  benefitsTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  benefitsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing.s,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    paddingHorizontal: theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
  benefitText: {
    ...theme.typography.body,
    marginLeft: theme.spacing.s,
    flex: 1,
  },
  rentButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.m,
    ...theme.shadows.medium,
  },
  rentButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginHorizontal: theme.spacing.m,
  },
  note: {
    ...theme.typography.caption,
    color: theme.colors.textTertiary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});