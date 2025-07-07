import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PropertyHero } from '@/components/common/PropertyHero';
import { SectionCard } from '@/components/common/SectionCard';
import { ResponsiveContainer } from '@/components/common/ResponsiveContainer';
import { theme } from '@/constants/theme';
import { MapPin, Chrome as HomeIcon, Wifi, Video, Book, UtensilsCrossed, Landmark, Briefcase, ExternalLink, Car, AArrowDown as ParkingIcon, CircleHelp as HelpCircle, Sofa, Image as ImageIcon } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  
  const handleViewMoreProperties = () => {
    Linking.openURL('https://www.ldguest.com/ldhome');
  };

  const handleAirbnbReview = () => {
    Linking.openURL('https://www.airbnb.com/rooms/review');
  };

  const handleBookingReview = () => {
    Linking.openURL('https://www.booking.com/reviews');
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + theme.spacing.xl }
        ]}
      >
        <PropertyHero
          title="1+1 Jardines Tropicales Puerto Banús"
          subtitle="Thank you for your reservation!"
          imageUrl="https://a0.muscache.com/im/pictures/miso/Hosting-1316607383752040451/original/4009975e-0d1a-450c-9458-88acab09ef65.png?im_w=1440&im_format=avif"
        />

        <View style={styles.licenseContainer}>
          <Text style={styles.licenseTitle}>Tourist License Information</Text>
          <Text style={styles.licenseText}>REGISTRO AUTONÓMICO: VUT/MA/78324</Text>
          <Text style={styles.licenseText}>NRA: ESFCTU0000290410000409120000000000000000VUT/MA/783241</Text>
          
          <View style={styles.idNoticeContainer}>
            <Text style={styles.idNoticeTitle}>📌 Important Notice - ID Upload Requirement</Text>
            <Text style={styles.idNoticeText}>
              According to Spanish law, all guests are legally required to upload valid passport or ID documents to the system before the start of their stay.
            </Text>
            <Text style={styles.idNoticeText}>
              Please complete this process before your stay through the ID upload link provided to you via the platform where you made your reservation.
            </Text>
          </View>
        </View>

        <ResponsiveContainer>
          <View style={styles.quickAccess}>
            <View style={styles.row}>
              <SectionCard
                title="The Location"
                icon={<MapPin size={28} color={theme.colors.secondary} />}
                route="/location"
                delay={1}
              />
              <SectionCard
                title="Home Entry"
                icon={<HomeIcon size={28} color={theme.colors.secondary} />}
                route="/entry"
                delay={2}
              />
            </View>
            
            <View style={styles.row}>
              <SectionCard
                title="WiFi"
                icon={<Wifi size={28} color={theme.colors.secondary} />}
                route="/wifi"
                delay={3}
              />
              <SectionCard
                title="House Videos"
                icon={<Video size={28} color={theme.colors.secondary} />}
                route="/videos"
                delay={4}
              />
            </View>
            
            <View style={styles.row}>
              <SectionCard
                title="Property Rules"
                icon={<Book size={28} color={theme.colors.secondary} />}
                route="/rules"
                delay={5}
              />
              <SectionCard
                title="Places to Eat"
                icon={<UtensilsCrossed size={28} color={theme.colors.secondary} />}
                route="/dining"
                delay={6}
              />
            </View>
            
            <View style={styles.row}>
              <SectionCard
                title="Places to Visit"
                icon={<Landmark size={28} color={theme.colors.secondary} />}
                route="/attractions"
                delay={7}
              />
              <SectionCard
                title="Luggage Storage"
                icon={<Briefcase size={28} color={theme.colors.secondary} />}
                route="/luggage"
                delay={8}
              />
            </View>

            <View style={styles.row}>
              <SectionCard
                title="Car Rental"
                icon={<Car size={28} color={theme.colors.secondary} />}
                route="/car-rental"
                delay={9}
              />
              <SectionCard
                title="Parking"
                icon={<ParkingIcon size={28} color={theme.colors.secondary} />}
                route="/parking"
                delay={10}
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.promoContainer}
            onPress={handleViewMoreProperties}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg' }}
              style={styles.promoImage}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.promoOverlay}
            >
              <View style={styles.promoContent}>
                <Text style={styles.promoTitle}>Discover More L&D Guest Homes</Text>
                <Text style={styles.promoDescription}>
                  Explore our collection of beautiful properties across Marbella's most desirable locations
                </Text>
                <View style={styles.promoButton}>
                  <Text style={styles.promoButtonText}>View Properties</Text>
                  <ExternalLink size={16} color={theme.colors.white} style={styles.promoIcon} />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.row}>
            <SectionCard
              title="Frequently Asked Questions"
              icon={<HelpCircle size={28} color={theme.colors.secondary} />}
              route="/info"
              delay={11}
            />
            <SectionCard
              title="Amenities"
              icon={<Sofa size={28} color={theme.colors.secondary} />}
              route="/amenities"
              delay={12}
            />
          </View>

          <View style={styles.row}>
            <SectionCard
              title="Photo Gallery"
              icon={<ImageIcon size={28} color={theme.colors.secondary} />}
              onPress={() => Linking.openURL('https://ldguest.com/ldhome/')}
              delay={13}
            />
          </View>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>Enjoying your stay?</Text>
            <Text style={styles.ratingDescription}>
              We'd love to hear about your experience. Your feedback helps us improve our service for future guests.
            </Text>
            <View style={styles.ratingButtons}>
              <TouchableOpacity 
                style={[styles.ratingButton, styles.airbnbButton]}
                onPress={handleAirbnbReview}
                activeOpacity={0.8}
              >
                <Image 
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' }}
                  style={styles.platformLogo}
                  resizeMode="contain"
                />
                <Text style={styles.ratingButtonText}>Review on Airbnb</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.ratingButton, styles.bookingButton]}
                onPress={handleBookingReview}
                activeOpacity={0.8}
              >
                <Image 
                  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png' }}
                  style={styles.platformLogo}
                  resizeMode="contain"
                />
                <Text style={[styles.ratingButtonText, styles.bookingButtonText]}>Review on Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ResponsiveContainer>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  quickAccess: {
    padding: theme.spacing.m,
  },
  row: {
    flexDirection: theme.layout.isWeb && theme.layout.isDesktop ? 'row' : 'row',
    width: '100%',
    gap: theme.layout.isWeb ? theme.spacing.s : 0,
  },
  promoContainer: {
    marginHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    height: theme.layout.isWeb ? (theme.layout.isDesktop ? 250 : 220) : 200,
    ...theme.shadows.medium,
  },
  promoImage: {
    width: '100%',
    height: '100%',
  },
  promoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  promoContent: {
    padding: theme.spacing.l,
  },
  promoTitle: {
    ...theme.typography.subheading,
    color: theme.colors.white,
    marginBottom: theme.spacing.s,
  },
  promoDescription: {
    ...theme.typography.body,
    color: theme.colors.white,
    marginBottom: theme.spacing.m,
  },
  promoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
  },
  promoButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginRight: theme.spacing.xs,
  },
  promoIcon: {
    marginLeft: theme.spacing.xs,
  },
  ratingContainer: {
    marginHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
    padding: theme.spacing.l,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    ...theme.shadows.small,
  },
  ratingTitle: {
    ...theme.typography.subheading,
    color: theme.colors.primary,
    marginBottom: theme.spacing.s,
    textAlign: 'center',
  },
  ratingDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.l,
  },
  ratingButtons: {
    width: '100%',
    gap: theme.spacing.m,
  },
  ratingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows.small,
  },
  airbnbButton: {
    backgroundColor: '#FF5A5F',
  },
  bookingButton: {
    backgroundColor: '#003580',
  },
  ratingButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  bookingButtonText: {
    color: theme.colors.white,
  },
  platformLogo: {
    width: 24,
    height: 24,
  },
  licenseContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
  },
  licenseTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
  },
  licenseText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    marginBottom: theme.spacing.xs,
  },
  idNoticeContainer: {
    marginTop: theme.spacing.m,
    paddingTop: theme.spacing.m,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  idNoticeTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.secondary,
    marginBottom: theme.spacing.s,
  },
  idNoticeText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
  },
});