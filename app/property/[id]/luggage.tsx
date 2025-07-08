import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Briefcase, MapPin, Clock, Shield, CreditCard, CircleCheck as CheckCircle2 } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

export default function LuggageScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();

  // Get storage options based on property ID
  const getStorageOptions = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return [
          {
            id: 3,
            name: 'Radical Storage',
            description: 'Located near Puerto Deportivo de Marbella, this storage point offers secure luggage storage services.',
            link: 'https://radicalstorage.com/?acc=6412fef87392ae8c987b0ecc79da1902&utm_source=aff_link&utm_medium=6412fef87392ae8c987b0ecc79da1902',
            logo: 'https://assets.radical.storage/static/logo/radical-storage-network-default.svg',
            features: [
              'Online booking available',
              '24/7 support',
              'Secure storage',
              'Fixed price',
              'City center location'
            ]
          },
          {
            id: 1,
            name: 'Stasher',
            description: 'An economical luggage storage solution in Marbella city center. Stasher offers the most convenient locations for luggage storage with verified hosts and excellent customer service.',
            link: 'https://stasher.com/?ref=nze3mju',
            logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/571a3a3d0000ff00058bdfe2/0x0.png',
            features: [
              'Budget-friendly',
              'Online booking',
              'Central location',
              '24/7 customer support',
              'Insurance included up to €1000'
            ]
          },
          {
            id: 2,
            name: 'QEEPL',
            description: 'Professional service offering secure self-service storage space.',
            link: 'https://qeepl.com/en/map?discount=FERE8SSD',
            logo: 'https://qeepl.com/images/logo.svg',
            features: [
              'CCTV security',
              'Short/long term',
              'Self-service',
              'Flexible pricing',
              'Multiple locations'
            ]
          }
        ];
      case '29051502': // Seaview Fontanilla
        return [
          {
            id: 1,
            name: 'Stasher',
            description: 'An economical luggage storage solution in Marbella city center. Stasher offers the most convenient locations for luggage storage with verified hosts and excellent customer service.',
            link: 'https://stasher.com/?ref=nze3mju',
            logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/571a3a3d0000ff00058bdfe2/0x0.png',
            features: [
              'Budget-friendly',
              'Online booking',
              'Central location',
              '24/7 customer support',
              'Insurance included up to €1000'
            ]
          },
          {
            id: 2,
            name: 'Radical Storage',
            description: 'Located near Puerto Deportivo de Marbella, this storage point offers secure luggage storage services.',
            link: 'https://radicalstorage.com/storage-list/marbella',
            logo: 'https://assets.radical.storage/static/logo/radical-storage-network-default.svg',
            features: [
              'Online booking available',
              '24/7 support',
              'Secure storage',
              'Fixed price'
            ]
          },
          {
            id: 3,
            name: 'Nannybag',
            description: 'Store your bags safely for a few hours or more.',
            link: 'https://www.nannybag.com/en/luggage-storage',
            logo: 'https://www.nannybag.com/assets/images/logo.svg',
            features: [
              'Fixed price',
              'Secure storage',
              'Easy access'
            ]
          },
          {
            id: 4,
            name: 'QEEPL',
            description: 'Professional service offering secure self-service storage space.',
            link: 'https://qeepl.com/en/map?discount=FERE8SSD',
            logo: 'https://qeepl.com/images/logo.svg',
            features: [
              'CCTV security',
              'Short/long term',
              'Self-service',
              'Variable pricing'
            ]
          }
        ];
      default:
        return [
          {
            id: 1,
            name: 'Stasher',
            description: 'Convenient luggage storage in Marbella with verified hosts.',
            link: 'https://stasher.com/?ref=nze3mju',
            logo: 'https://s3-eu-west-1.amazonaws.com/tpd/logos/571a3a3d0000ff00058bdfe2/0x0.png',
            features: [
              'Budget-friendly',
              'Online booking',
              'Multiple locations',
              '24/7 customer support',
              'Insurance included up to €1000'
            ]
          },
          {
            id: 2,
            name: 'Radical Storage',
            description: 'Secure luggage storage near Marbella with verified locations.',
            link: 'https://radicalstorage.com/?acc=6412fef87392ae8c987b0ecc79da1902&utm_source=aff_link&utm_medium=6412fef87392ae8c987b0ecc79da1902',
            logo: 'https://assets.radical.storage/static/logo/radical-storage-network-default.svg',
            features: [
              'Online booking available',
              '24/7 support',
              'Secure storage',
              'Fixed price',
              'City center location'
            ]
          },
          {
            id: 3,
            name: 'QEEPL',
            description: 'Professional service offering secure self-service storage space.',
            link: 'https://qeepl.com/en/map?discount=FERE8SSD',
            logo: 'https://qeepl.com/images/logo.svg',
            features: [
              'CCTV security',
              'Short/long term',
              'Self-service',
              'Flexible pricing',
              'Multiple locations'
            ]
          }
        ];
    }
  };

  const storageOptions = getStorageOptions();

  const getDescription = () => {
    switch(id) {
      case '29051501':
        return 'Need to store your luggage before check-in or after check-out? Here are some reliable storage options in Marbella:';
      case '29051502':
        return 'Need to store your luggage before check-in or after check-out? Here are reliable storage options near your Seaview apartment in Marbella:';
      case '29051503':
        return 'Need to store your luggage before check-in or after check-out? Here are reliable storage options near your Aloha Pueblo townhouse:';
      case '29051504':
        return 'Need to store your luggage before check-in or after check-out? Here are reliable storage options near your Old Town apartment in Marbella:';
      default:
        return 'Need to store your luggage before check-in or after check-out? Here are some reliable storage options:';
    }
  };

  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title={t('home.luggage')} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          {t(`luggage.description.${id}`, { defaultValue: getDescription() })}
        </Text>

        {storageOptions.map((option, index) => (
          <Animated.View 
            key={option.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.optionCard}
          >
            <View style={styles.headerContainer}>
              <Image 
                source={{ uri: option.logo }}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.optionName}>{option.name}</Text>
            </View>
            
            <Text style={styles.optionDescription}>{option.description}</Text>
            
            <View style={styles.featuresList}>
              {option.features.map((feature, featureIndex) => (
                <View key={featureIndex} style={styles.featureItem}>
                  <CheckCircle2 size={16} color={theme.colors.success} />
                  <Text style={styles.featureText}>{t(`luggage.features.${option.id}.${featureIndex}`, { defaultValue: feature })}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity 
              style={styles.bookButton}
              onPress={() => handleOpenLink(option.link)}
              activeOpacity={0.8}
            >
              <Text style={styles.bookButtonText}>{t('luggage.bookStorage')}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}

        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimer}>
            {t('luggage.disclaimer')}
          </Text>
        </View>
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
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
  },
  optionCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: theme.spacing.m,
  },
  optionName: {
    ...theme.typography.subheading,
  },
  optionDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  featuresList: {
    marginBottom: theme.spacing.m,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
  featureText: {
    ...theme.typography.body,
    marginLeft: theme.spacing.s,
  },
  bookButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    ...theme.shadows.small,
  },
  bookButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
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
    fontStyle: 'italic',
  },
});