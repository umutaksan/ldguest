import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, ImageBackground, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink, Navigation } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width } = useWindowDimensions();

  const nearbyCities = [
    { 
      id: 1, 
      name: 'Marbella Old Town',
      description: 'Right in Marbella, explore narrow streets, charming plazas, and historical sites.',
      distance: '0 km',
      image: 'https://images.pexels.com/photos/4502965/pexels-photo-4502965.jpeg'
    },
    { 
      id: 2, 
      name: 'Benahavís',
      description: 'A charming mountain village known for its gastronomy and scenic views.',
      distance: '20 km',
      image: 'https://images.pexels.com/photos/17811873/pexels-photo-17811873.jpeg'
    },
    { 
      id: 3, 
      name: 'Estepona',
      description: 'A picturesque coastal town with beautiful beaches and flower-filled streets.',
      distance: '30 km',
      image: 'https://images.pexels.com/photos/17373391/pexels-photo-17373391.jpeg'
    },
    { 
      id: 4, 
      name: 'Casares',
      description: 'A stunning hilltop village famous for its whitewashed houses and historic charm.',
      distance: '40 km',
      image: 'https://images.pexels.com/photos/17373392/pexels-photo-17373392.jpeg'
    },
    { 
      id: 5, 
      name: 'Mijas Pueblo',
      description: 'A traditional Andalusian village with cobblestone streets and spectacular coastal views.',
      distance: '35 km',
      image: 'https://images.pexels.com/photos/17373393/pexels-photo-17373393.jpeg'
    },
    { 
      id: 6, 
      name: 'Fuengirola',
      description: 'A lively seaside town with vibrant beaches and plenty of entertainment options.',
      distance: '30 km',
      image: 'https://images.pexels.com/photos/17373394/pexels-photo-17373394.jpeg'
    },
    { 
      id: 7, 
      name: 'Ronda',
      description: 'Known for its dramatic cliffs, historic bridges, and breathtaking landscapes.',
      distance: '60 km',
      image: 'https://images.pexels.com/photos/17373395/pexels-photo-17373395.jpeg'
    },
    { 
      id: 8, 
      name: 'Málaga',
      description: 'The birthplace of Picasso, offering rich history, museums, and a lively cultural scene.',
      distance: '60 km',
      image: 'https://images.pexels.com/photos/17373396/pexels-photo-17373396.jpeg'
    },
    { 
      id: 9, 
      name: 'Nerja',
      description: 'Famous for its beautiful beaches and the Nerja Caves with ancient stalactites.',
      distance: '100 km',
      image: 'https://images.pexels.com/photos/17373397/pexels-photo-17373397.jpeg'
    },
    { 
      id: 10, 
      name: 'Granada',
      description: 'Home to the Alhambra Palace and rich Moorish history, a must-visit for cultural enthusiasts.',
      distance: '180 km',
      image: 'https://images.pexels.com/photos/17373398/pexels-photo-17373398.jpeg'
    },
    { 
      id: 11, 
      name: 'Córdoba',
      description: 'Known for the Mezquita, a unique mosque-cathedral, and its charming old town.',
      distance: '200 km',
      image: 'https://images.pexels.com/photos/17373399/pexels-photo-17373399.jpeg'
    },
    { 
      id: 12, 
      name: 'Gibraltar',
      description: 'A British territory featuring the iconic Rock of Gibraltar and its famous monkeys.',
      distance: '80 km',
      image: 'https://images.pexels.com/photos/17373400/pexels-photo-17373400.jpeg'
    }
  ];

  const handleOpenMaps = (cityName: string) => {
    const query = encodeURIComponent(`${cityName}, Spain`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  // Determine if we're on a large screen
  const isLargeScreen = width > 1024;
  const isMediumScreen = width > 768 && width <= 1024;
  const isSmallScreen = width <= 768;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Explore The Area" showBackButton={false} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          isLargeScreen && styles.contentLarge
        ]}
      >
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg' }}
          style={[
            styles.hero,
            isLargeScreen && styles.heroLarge
          ]}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
            style={styles.heroOverlay}
          >
            <Text style={[
              styles.heroTitle,
              isLargeScreen && styles.heroTitleLarge
            ]}>Discover Andalusia</Text>
            <Text style={[
              styles.heroSubtitle,
              isLargeScreen && styles.heroSubtitleLarge
            ]}>Explore beautiful cities and historic towns around Marbella</Text>
          </LinearGradient>
        </ImageBackground>

        <View style={[
          styles.statsContainer,
          isLargeScreen && styles.statsContainerLarge
        ]}>
          <View style={styles.statItem}>
            <Text style={[
              styles.statNumber,
              isLargeScreen && styles.statNumberLarge
            ]}>21</Text>
            <Text style={styles.statLabel}>Cities</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[
              styles.statNumber,
              isLargeScreen && styles.statNumberLarge
            ]}>300</Text>
            <Text style={styles.statLabel}>km Radius</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={[
              styles.statNumber,
              isLargeScreen && styles.statNumberLarge
            ]}>100+</Text>
            <Text style={styles.statLabel}>Attractions</Text>
          </View>
        </View>

        <Text style={[
          styles.sectionTitle,
          isLargeScreen && styles.sectionTitleLarge
        ]}>Nearby Destinations</Text>

        <View style={[
          styles.citiesGrid,
          isLargeScreen && styles.citiesGridLarge,
          isMediumScreen && styles.citiesGridMedium
        ]}>
          {nearbyCities.map((city, index) => (
            <Animated.View 
              key={city.id}
              entering={FadeIn.delay(index * 100)}
              style={[
                styles.cityCard,
                isLargeScreen && styles.cityCardLarge,
                isMediumScreen && styles.cityCardMedium
              ]}
            >
              <ImageBackground 
                source={{ uri: city.image }}
                style={styles.cityImage}
                resizeMode="cover"
              >
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.7)']}
                  style={styles.cityImageOverlay}
                >
                  <View style={styles.cityHeader}>
                    <View style={styles.cityInfo}>
                      <Text style={styles.cityName}>{city.name}</Text>
                      <View style={styles.distanceContainer}>
                        <MapPin size={14} color={theme.colors.white} />
                        <Text style={styles.distance}>{city.distance}</Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </ImageBackground>
              
              <View style={styles.cityContent}>
                <Text style={styles.cityDescription}>{city.description}</Text>
                <TouchableOpacity
                  style={styles.directionsButton}
                  onPress={() => handleOpenMaps(city.name)}
                >
                  <Navigation size={16} color={theme.colors.primary} />
                  <Text style={styles.directionsText}>Get Directions</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          ))}
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
      overflowX: 'hidden'
    })
  },
  content: {
    padding: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.xl
    })
  },
  contentLarge: {
    maxWidth: 1280,
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.xl
  },
  hero: {
    height: 200,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
    ...(theme.layout.isWeb && {
      boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
    })
  },
  heroLarge: {
    height: 500
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.xl
    })
  },
  heroTitle: {
    ...theme.typography.heading,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  heroTitleLarge: {
    fontSize: 52,
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15
  },
  heroSubtitle: {
    ...theme.typography.body,
    color: theme.colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  heroSubtitleLarge: {
    fontSize: 24,
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.l,
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
    })
  },
  statsContainerLarge: {
    padding: theme.spacing.l,
    maxWidth: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing.xl
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    ...(theme.layout.isWeb && {
      padding: theme.spacing.m
    })
  },
  statNumber: {
    ...theme.typography.subheading,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 28
    })
  },
  statNumberLarge: {
    fontSize: 38,
    fontWeight: 'bold'
  },
  statLabel: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary
  },
  statDivider: {
    width: 1,
    backgroundColor: theme.colors.border,
    marginHorizontal: theme.spacing.m
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m
  },
  sectionTitleLarge: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: theme.spacing.l,
    textAlign: 'center'
  },
  citiesGrid: {
    flexDirection: 'column'
  },
  citiesGridLarge: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  citiesGridMedium: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  cityCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.m,
    overflow: 'hidden',
    ...theme.shadows.small,
    width: '100%',
    ...(theme.layout.isWeb && {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
      }
    })
  },
  cityCardLarge: {
    width: '31%',
    marginBottom: theme.spacing.xl
  },
  cityCardMedium: {
    width: '47%',
    marginBottom: theme.spacing.l
  },
  cityImage: {
    width: '100%',
    height: 200
  },
  cityImageOverlay: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  cityContent: {
    padding: theme.spacing.m
  },
  cityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: theme.spacing.m
  },
  cityInfo: {
    flex: 1
  },
  cityName: {
    ...theme.typography.subheading,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  distance: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    marginLeft: theme.spacing.xs,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5
  },
  cityDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 16,
      minHeight: 70
    })
  },
  directionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryLight,
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    marginTop: theme.spacing.m
  },
  directionsText: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    marginLeft: theme.spacing.xs
  }
});