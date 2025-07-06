import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter, usePathname } from 'expo-router';
import { PropertyHero } from '@/components/common/PropertyHero';
import { SectionCard } from '@/components/common/SectionCard';
import { theme } from '@/constants/theme';
import { MapPin, Chrome as HomeIcon, Wifi, Video, Book, UtensilsCrossed, Landmark, Briefcase, ExternalLink, Car, AArrowDown as ParkingIcon } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';

export default function PropertyScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  
  // Property data based on ID
  const getPropertyData = () => {
    switch(id) {
      case '29051501':
        return {
          title: '1+1 Jardines Tropicales Puerto Banús',
          imageUrl: 'https://a0.muscache.com/im/pictures/miso/Hosting-1316607383752040451/original/4009975e-0d1a-450c-9458-88acab09ef65.png?im_w=1440&im_format=avif'
        };
      case '29051502':
        return {
          title: '2+1 Seaview Playa de Fontanilla',
          imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/628787942.jpg?k=8debb78111131852bf35286c8e7e732682d6570737cf214f84c3803fce5d4806&o='
        };
      case '29051503':
        return {
          title: '1+1 Aloha Pueblo Townhouse',
          imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/681135350.jpg?k=fc73c36cd1371fe8efdc2e947ec5aa836557ffe9210d4e33aadbb0e8f237d43a&o=&hp=1'
        };
      case '29051504':
        return {
          title: '3+1 Marbella Old Town',
          imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/645431688.jpg?k=0d1af13e52daafe35fe9638dd024af7730169834024271f0cc2f0540393f7104&o='
        };
      default:
        return {
          title: 'L&D Guest Property',
          imageUrl: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg'
        };
    }
  };
  
  const propertyData = getPropertyData();
  
  const handleViewMoreProperties = () => {
    Linking.openURL('https://www.ldguest.com/ldhome');
  };

  const handleAirbnbReview = () => {
    Linking.openURL('https://www.airbnb.com/rooms/review');
  };

  const handleBookingReview = () => {
    Linking.openURL('https://www.booking.com/reviews');
  };
  
  // Determine if we're on a large screen
  const isLargeScreen = width > 1024;
  const isMediumScreen = width > 768 && width <= 1024;

  const navigateToSection = (section: string) => {
    router.push(`/property/${id}/${section}`);
  };

  // Calculate grid columns based on screen size
  const gridColumns = isLargeScreen ? 3 : isMediumScreen ? 2 : 2;

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
          title={propertyData.title}
          subtitle="Thank you for your reservation!"
          imageUrl={propertyData.imageUrl}
        />

        <View style={[
          styles.quickAccess,
          isLargeScreen && styles.quickAccessLarge,
          isMediumScreen && styles.quickAccessMedium
        ]}>
          <Animated.View entering={FadeInDown.delay(100)} style={[styles.sectionTitle, isLargeScreen && styles.sectionTitleLarge]}>
            <Text style={styles.sectionTitleText}>Property Information</Text>
          </Animated.View>
          
          <View style={[
            styles.cardsGrid,
            isLargeScreen && styles.cardsGridLarge,
            isMediumScreen && styles.cardsGridMedium
          ]}>
            <SectionCard
              title="The Location"
              icon={<MapPin size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('location')}
              delay={1}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="Home Entry"
              icon={<HomeIcon size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('entry')}
              delay={2}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="WiFi"
              icon={<Wifi size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('wifi')}
              delay={3}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="House Videos"
              icon={<Video size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('videos')}
              delay={4}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="Property Rules"
              icon={<Book size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('rules')}
              delay={5}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="Places to Eat"
              icon={<UtensilsCrossed size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('dining')}
              delay={6}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="Places to Visit"
              icon={<Landmark size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('attractions')}
              delay={7}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="Luggage Storage"
              icon={<Briefcase size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('luggage')}
              delay={8}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="Car Rental"
              icon={<Car size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('car-rental')}
              delay={9}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
            <SectionCard
              title="Parking"
              icon={<ParkingIcon size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('parking')}
              delay={10}
              style={[
                styles.card,
                isLargeScreen && styles.cardLarge,
                isMediumScreen && styles.cardMedium
              ]}
            />
          </View>
        </View>

        <View style={[
          styles.promoSection,
          isLargeScreen && styles.promoSectionLarge,
          isMediumScreen && styles.promoSectionMedium
        ]}>
          <TouchableOpacity 
            style={[
              styles.promoContainer,
              isLargeScreen && styles.promoContainerLarge,
              isMediumScreen && styles.promoContainerMedium
            ]}
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
                <Text style={[styles.promoTitle, isLargeScreen && styles.promoTitleLarge]}>Discover More L&D Guest Homes</Text>
                <Text style={[styles.promoDescription, isLargeScreen && styles.promoDescriptionLarge]}>
                  Explore our collection of beautiful properties across Marbella's most desirable locations
                </Text>
                <View style={styles.promoButton}>
                  <Text style={styles.promoButtonText}>View Properties</Text>
                  <ExternalLink size={16} color={theme.colors.white} style={styles.promoIcon} />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={[
            styles.ratingContainer,
            isLargeScreen && styles.ratingContainerLarge,
            isMediumScreen && styles.ratingContainerMedium
          ]}>
            <Text style={[styles.ratingTitle, isLargeScreen && styles.ratingTitleLarge]}>Enjoying your stay?</Text>
            <Text style={[styles.ratingDescription, isLargeScreen && styles.ratingDescriptionLarge]}>
              We'd love to hear about your experience. Your feedback helps us improve our service for future guests.
            </Text>
            <View style={[
              styles.ratingButtons,
              isLargeScreen && styles.ratingButtonsLarge,
              isMediumScreen && styles.ratingButtonsMedium
            ]}>
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
  scrollContent: {
    flexGrow: 1,
  },
  sectionTitle: {
    width: '100%',
    marginBottom: theme.spacing.m,
  },
  sectionTitleLarge: {
    marginBottom: theme.spacing.l,
  },
  sectionTitleText: {
    ...theme.typography.heading,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  quickAccess: {
    padding: theme.spacing.m,
    width: '100%',
  },
  quickAccessLarge: {
    maxWidth: 1200,
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  quickAccessMedium: {
    maxWidth: 900,
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.l,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardsGridLarge: {
    justifyContent: 'flex-start',
    gap: theme.spacing.m,
  },
  cardsGridMedium: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: theme.spacing.m,
  },
  cardLarge: {
    width: 'calc(33.33% - 16px)',
    marginBottom: theme.spacing.l,
  },
  cardMedium: {
    width: '48%',
    marginBottom: theme.spacing.m,
  },
  row: {
    flexDirection: theme.layout.isWeb && theme.layout.isDesktop ? 'row' : 'row',
    width: '100%',
    gap: theme.layout.isWeb ? theme.spacing.s : 0,
  },
  promoSection: {
    width: '100%',
    padding: theme.spacing.m,
  },
  promoSectionLarge: {
    maxWidth: 1200,
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  promoSectionMedium: {
    maxWidth: 900,
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.l,
  },
  promoContainer: {
    marginBottom: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    height: theme.layout.isWeb ? (theme.layout.isDesktop ? 250 : 220) : 200,
    ...theme.shadows.medium,
  },
  promoContainerLarge: {
    width: '48%',
    height: 350,
  },
  promoContainerMedium: {
    width: '100%',
    height: 300,
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
    marginBottom: theme.spacing.m,
    padding: theme.spacing.l,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    width: '100%',
    ...theme.shadows.small,
  },
  ratingContainerLarge: {
    width: '48%',
    height: 350,
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
  ratingContainerMedium: {
    width: '100%',
    marginTop: theme.spacing.m,
    padding: theme.spacing.xl,
  },
  ratingTitleLarge: {
    fontSize: 28,
    marginBottom: theme.spacing.m,
  },
  ratingDescriptionLarge: {
    fontSize: 18,
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
  ratingButtonsLarge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.l,
  },
  ratingButtonsMedium: {
    gap: theme.spacing.l,
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
});