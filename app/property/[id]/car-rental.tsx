import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Car, Shield, CreditCard, CircleCheck as CheckCircle2, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

export default function CarRentalScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();

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

  // Get title and description based on property ID
  const getContent = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          title: 'Explore Marbella at Your Own Pace',
          description: 'Discover the freedom of exploring Costa del Sol with your own rental car. From scenic coastal drives to mountain adventures, make the most of your stay with a reliable vehicle from our trusted partner.'
        };
      case '29051502': // Seaview Fontanilla
        return {
          title: 'Explore Costa del Sol at Your Own Pace',
          description: 'Discover the freedom of exploring the beautiful Costa del Sol with your own rental car. From scenic coastal drives to mountain adventures, make the most of your stay at Seaview Fontanilla with a reliable vehicle from our trusted partner.'
        };
      case '29051503': // Aloha Pueblo
        return {
          title: 'Explore Golf Valley and Beyond',
          description: 'Discover the freedom of exploring Costa del Sol with your own rental car. From visiting multiple golf courses to scenic coastal drives, make the most of your stay at Aloha Pueblo with a reliable vehicle from our trusted partner.'
        };
      case '29051504': // Old Town
        return {
          title: 'Explore Andalusia from Old Town',
          description: 'Discover the freedom of exploring Costa del Sol and beyond with your own rental car. From your historic Old Town location, venture out to discover beautiful coastal towns, mountain villages, and cultural treasures with a reliable vehicle from our trusted partner.'
        };
      default:
        return {
          title: 'Explore Marbella with Your Own Car',
          description: 'Discover the freedom of exploring Costa del Sol with your own rental car. From scenic coastal drives to mountain adventures, make the most of your stay with a reliable vehicle from our trusted partner.'
        };
    }
  };

  const content = getContent();

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title={t('home.carRental')} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.mainContent}>
            <Text style={styles.title}>{t(`carRental.title.${id}`, { defaultValue: content.title })}</Text>
            <Text style={styles.description}>
              {t(`carRental.description.${id}`, { defaultValue: content.description })}
            </Text>

            <View style={styles.benefitsContainer}>
              <Text style={styles.benefitsTitle}>{t('carRental.whyChoosePartner')}</Text>
              <View style={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <View key={index} style={styles.benefitItem}>
                    <CheckCircle2 size={16} color={theme.colors.success} />
                    <Text style={styles.benefitText}>{t(`carRental.benefits.${index}`, { defaultValue: benefit })}</Text>
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
              <Text style={styles.rentButtonText}>{t('carRental.findPerfectCar')}</Text>
              <ExternalLink size={20} color={theme.colors.white} />
            </TouchableOpacity>

            <Text style={styles.note}>
              {t('carRental.pricesNote')}
            </Text>
            
            <View style={styles.disclaimerContainer}>
              <Text style={styles.disclaimer}>
                {t('carRental.disclaimer1')}
              </Text>
              <Text style={styles.disclaimer}>
                {t('carRental.disclaimer2')}
              </Text>
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
  disclaimerContainer: {
    marginTop: theme.spacing.m,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
  },
  disclaimer: {
    ...theme.typography.caption,
    color: theme.colors.textTertiary,
    textAlign: 'left',
    fontStyle: 'italic',
    marginBottom: theme.spacing.s,
  },
});