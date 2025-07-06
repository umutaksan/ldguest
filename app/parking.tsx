import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, Navigation } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ParkingScreen() {
  const insets = useSafeAreaInsets();

  const handleOpenMaps = () => {
    const query = encodeURIComponent('Calle Azahar 12, Nueva Andalucía, Marbella');
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Parking" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Free Parking Available</Text>
            <Text style={styles.description}>
              There is an open parking lot in front of the house where you can park your vehicle free of charge.
            </Text>

            <Image 
              source={{ uri: 'https://static.wixstatic.com/media/8bbc22_4c94e82090444532a15fb6f58cd9a47a~mv2.png/v1/fill/w_540,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png' }}
              style={styles.parkingImage}
              resizeMode="cover"
            />

            <TouchableOpacity 
              style={styles.directionsButton}
              onPress={handleOpenMaps}
              activeOpacity={0.8}
            >
              <Navigation size={20} color={theme.colors.white} />
              <Text style={styles.directionsButtonText}>Get Directions</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Location Details</Text>
            <View style={styles.locationCard}>
              <MapPin size={20} color={theme.colors.primary} />
              <View style={styles.locationInfo}>
                <Text style={styles.address}>Calle Azahar 12</Text>
                <Text style={styles.addressDetail}>Nueva Andalucía</Text>
                <Text style={styles.addressDetail}>29660 Marbella</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Parking Tips</Text>
            <View style={styles.tipsContainer}>
              <Text style={styles.tip}>• The parking area is well-lit and safe</Text>
              <Text style={styles.tip}>• Available 24/7</Text>
              <Text style={styles.tip}>• No time restrictions</Text>
              <Text style={styles.tip}>• Keep valuables out of sight</Text>
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
  section: {
    marginBottom: theme.spacing.xl,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      marginBottom: theme.spacing.xxl,
    }),
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 26,
      marginBottom: theme.spacing.l,
    }),
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 18,
      lineHeight: 28,
      marginBottom: theme.spacing.l,
    }),
  },
  parkingImage: {
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      height: 400,
      maxWidth: 800,
      marginHorizontal: 'auto',
      marginBottom: theme.spacing.l,
    }),
  },
  directionsButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      '&:hover': {
        backgroundColor: theme.colors.primaryDark,
        transform: 'translateY(-3px)',
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.l,
      maxWidth: 400,
      marginHorizontal: 'auto',
    }),
  },
  directionsButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 18,
    }),
  },
  locationCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.l,
      maxWidth: 800,
      marginHorizontal: 'auto',
    }),
  },
  locationInfo: {
    marginLeft: theme.spacing.m,
  },
  address: {
    ...theme.typography.bodyMedium,
    marginBottom: 2,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 18,
      marginBottom: 4,
    }),
  },
  addressDetail: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 16,
    }),
  },
  tipsContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-3px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.l,
      maxWidth: 800,
      marginHorizontal: 'auto',
    }),
  },
  tip: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 17,
      marginBottom: theme.spacing.m,
    }),
  },
});