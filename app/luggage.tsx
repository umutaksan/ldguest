import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Briefcase, MapPin, Clock, Shield, CreditCard, CircleCheck as CheckCircle2 } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function LuggageScreen() {
  const insets = useSafeAreaInsets();

  const storageOptions = [
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

  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Luggage Storage" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          Need to store your luggage before check-in or after check-out? Here are some reliable storage options in Marbella:
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
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity 
              style={styles.bookButton}
              onPress={() => handleOpenLink(option.link)}
              activeOpacity={0.8}
            >
              <Text style={styles.bookButtonText}>Book Storage</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}

        <View style={styles.disclaimerContainer}>
          <Text style={styles.disclaimer}>
            *L&D Guest does not provide luggage storage services after check-out and therefore accepts no responsibility for stored items
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
    ...(theme.layout.isWeb && {
      maxWidth: '100vw',
      overflowX: 'hidden',
    }),
  },
  content: {
    padding: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      maxWidth: 1000,
      marginHorizontal: 'auto',
      padding: theme.spacing.xl,
    }),
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 18,
      lineHeight: 28,
      maxWidth: 800,
      marginHorizontal: 'auto',
      marginBottom: theme.spacing.xl,
      textAlign: 'center',
    }),
  },
  optionCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.l,
      marginBottom: theme.spacing.l,
      maxWidth: 800,
      marginHorizontal: 'auto',
    }),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      marginBottom: theme.spacing.l,
    }),
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      width: 60,
      height: 60,
    }),
  },
  optionName: {
    ...theme.typography.subheading,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 24,
    }),
  },
  optionDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 17,
      lineHeight: 26,
      marginBottom: theme.spacing.l,
    }),
  },
  featuresList: {
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: theme.spacing.m,
      marginBottom: theme.spacing.l,
    }),
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      marginBottom: theme.spacing.m,
    }),
  },
  featureText: {
    ...theme.typography.body,
    marginLeft: theme.spacing.s,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 17,
    }),
  },
  bookButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: theme.colors.primaryDark,
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.l,
      maxWidth: 300,
      marginHorizontal: 'auto',
    }),
  },
  bookButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 18,
    }),
  },
  disclaimerContainer: {
    marginTop: theme.spacing.m,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      maxWidth: 800,
      marginHorizontal: 'auto',
      padding: theme.spacing.l,
    }),
  },
  disclaimer: {
    ...theme.typography.caption,
    color: theme.colors.textTertiary,
    fontStyle: 'italic',
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 15,
      textAlign: 'center',
    }),
  },
});