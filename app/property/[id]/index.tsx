import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text, Linking, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { PropertyHero } from '@/components/common/PropertyHero';
import { SectionCard } from '@/components/common/SectionCard';
import { theme } from '@/constants/theme';
import { MapPin, Chrome as HomeIcon, Wifi, Video, Book, UtensilsCrossed, Landmark, Briefcase, ExternalLink, Car, AArrowDown as ParkingIcon, CircleHelp as HelpCircle, Sofa, Image as ImageIcon, Instagram, Mail, Youtube, Globe, Star } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function PropertyScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  
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

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/ldguest');
  };
  
  const handleEmailPress = () => {
    Linking.openURL('mailto:hello@ldguest.com');
  };
  
  const handleYoutubePress = () => {
    Linking.openURL('https://www.youtube.com/@ldguest');
  };
  
  const handleWebsitePress = () => {
    Linking.openURL('https://www.ldguest.com');
  };
  
  const handleAirbnbReview = () => {
    Linking.openURL('https://www.airbnb.com/');
  };

  const handleBookingReview = () => {
    Linking.openURL('https://www.booking.com/');
  };

  const handleVrboReview = () => {
    Linking.openURL('https://www.vrbo.com/es-es/');
  };

  const handleMalagaMarbellaPress = () => {
    Linking.openURL('https://www.malagamarbella.com');
  };

  const navigateToSection = (section: string) => {
    router.push(`/property/${id}/${section}`);
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
          title={propertyData.title}
          subtitle="Thank you for your reservation!"
          imageUrl={propertyData.imageUrl}
        />

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity 
            style={styles.socialIconButton}
            onPress={handleInstagramPress}
            activeOpacity={0.7}
          >
            <Instagram size={22} color={theme.colors.primary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialIconButton}
            onPress={handleEmailPress}
            activeOpacity={0.7}
          >
            <Mail size={22} color={theme.colors.primary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialIconButton}
            onPress={handleYoutubePress}
            activeOpacity={0.7}
          >
            <Youtube size={22} color={theme.colors.primary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialIconButton}
            onPress={handleWebsitePress}
            activeOpacity={0.7}
          >
            <Globe size={22} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.licenseContainer}>
          <Text style={styles.licenseTitle}>Tourist License Information</Text>
          {id === '29051501' && (
            <>
              <Text style={styles.licenseText}>REGISTRO AUTONÓMICO: VUT/MA/78324</Text>
              <Text style={styles.licenseText}>NRA: ESFCTU0000290410000409120000000000000000VUT/MA/783241</Text>
            </>
          )}
          {id === '29051502' && (
            <>
              <Text style={styles.licenseText}>REGISTRO AUTONÓMICO: VUT/MA/84842</Text>
              <Text style={styles.licenseText}>NRA: ESFCTU0000290290006252920000000000000000VUT/MA/848425</Text>
            </>
          )}
          {id === '29051503' && (
            <>
              <Text style={styles.licenseText}>REGISTRO AUTONÓMICO: VUT/MA/76801</Text>
              <Text style={styles.licenseText}>NRA: ESFCTU0000290410003381870000000000000000VUT/MA/768015</Text>
            </>
          )}
          {id === '29051504' && (
            <>
              <Text style={styles.licenseText}>REGISTRO AUTONÓMICO: VUT/MA/83102</Text>
              <Text style={styles.licenseText}>NRA: ESFCTU0000290290006454810000000000000000VUT/MA/831025</Text>
            </>
          )}
          
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

        <View style={styles.quickAccess}>
          <View style={styles.row}>
            <SectionCard
              title="The Location"
              icon={<MapPin size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('location')}
              delay={1}
            />
            <SectionCard
              title="Home Entry"
              icon={<HomeIcon size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('entry')}
              delay={2}
            />
          </View>
          
          <View style={styles.row}>
            <SectionCard
              title="WiFi"
              icon={<Wifi size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('wifi')}
              delay={3}
            />
            <SectionCard
              title="House Videos"
              icon={<Video size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('videos')}
              delay={4}
            />
          </View>
          
          <View style={styles.row}>
            <SectionCard
              title="Property Rules"
              icon={<Book size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('rules')}
              delay={5}
            />
            <SectionCard
              title="Places to Eat"
              icon={<UtensilsCrossed size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('dining')}
              delay={6}
            />
          </View>
          
          <View style={styles.row}>
            <SectionCard
              title="Places to Visit"
              icon={<Landmark size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('attractions')}
              delay={7}
            />
            <SectionCard
              title="Luggage Storage"
              icon={<Briefcase size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('luggage')}
              delay={8}
            />
          </View>

          <View style={styles.row}>
            <SectionCard
              title="Car Rental"
              icon={<Car size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('car-rental')}
              delay={9}
            />
            <SectionCard
              title="Parking"
              icon={<ParkingIcon size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('parking')}
              delay={10}
            />
          </View>
          
          <View style={styles.row}>
            <SectionCard
              title="Frequently Asked Questions"
              icon={<HelpCircle size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('info')}
              delay={11}
            />
            <SectionCard
              title="Amenities"
              icon={<Sofa size={28} color={theme.colors.secondary} />}
              onPress={() => navigateToSection('amenities')}
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

        <Animated.View entering={FadeIn.delay(300)} style={styles.reviewBanner}>
          <Text style={styles.reviewBannerTitle}>Enjoyed your stay? Leave us a review!</Text>
          <View style={styles.reviewButtonsContainer}>
            <TouchableOpacity 
              style={styles.reviewButton}
              onPress={handleAirbnbReview}
              activeOpacity={0.7}
            >
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' }}
                style={styles.reviewLogo}
                resizeMode="contain"
              />
              <Text style={styles.reviewButtonText}>Airbnb</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.reviewButton}
              onPress={handleBookingReview}
              activeOpacity={0.7}
            >
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png' }}
                style={styles.reviewLogo}
                resizeMode="contain"
              />
              <Text style={styles.reviewButtonText}>Booking.com</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.reviewButton}
              onPress={handleVrboReview}
              activeOpacity={0.7}
            >
              <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Vrbo_logo.svg/2560px-Vrbo_logo.svg.png' }}
                style={styles.reviewLogo}
                resizeMode="contain"
              />
              <Text style={styles.reviewButtonText}>VRBO</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
        
        <Animated.View entering={FadeIn.delay(400)} style={styles.websiteBanner}>
          <TouchableOpacity 
            style={styles.websiteBannerContent}
            onPress={handleMalagaMarbellaPress}
            activeOpacity={0.7}
          >
            <View style={styles.websiteIconContainer}>
              <Globe size={24} color={theme.colors.white} />
            </View>
            <View style={styles.websiteTextContainer}>
              <Text style={styles.websiteBannerText}>
                Discover more properties, local tips, and exclusive offers at malagamarbella.com
              </Text>
            </View>
            <ExternalLink size={20} color={theme.colors.white} />
          </TouchableOpacity>
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
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  socialIconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: theme.spacing.s,
    ...theme.shadows.small,
  },
  reviewBanner: {
    backgroundColor: theme.colors.card,
    marginHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
  reviewBannerTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.m,
  },
  reviewButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  reviewButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
    backgroundColor: theme.colors.surface,
    minWidth: 80,
    ...theme.shadows.small,
  },
  reviewLogo: {
    width: 60,
    height: 24,
    marginBottom: theme.spacing.xs,
  },
  reviewButtonText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  websiteBanner: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  websiteBannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.m,
  },
  websiteIconContainer: {
    marginRight: theme.spacing.m,
  },
  websiteTextContainer: {
    flex: 1,
  },
  websiteBannerText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
    marginRight: theme.spacing.m,
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