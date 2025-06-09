import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink, Navigation } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function AlohaPuebloExploreScreen() {
  const insets = useSafeAreaInsets();

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
    },
    { 
      id: 13, 
      name: 'Tarifa',
      description: 'A paradise for windsurfing and kiteboarding, located at the southernmost point of Europe.',
      distance: '100 km',
      image: 'https://images.pexels.com/photos/17373401/pexels-photo-17373401.jpeg'
    },
    { 
      id: 14, 
      name: 'Jerez de la Frontera',
      description: 'Famous for its sherry wine, flamenco, and beautiful equestrian shows.',
      distance: '160 km',
      image: 'https://images.pexels.com/photos/17373402/pexels-photo-17373402.jpeg'
    },
    { 
      id: 15, 
      name: 'Sevilla',
      description: 'A vibrant city known for its Gothic cathedral, Alcázar palace, and lively streets.',
      distance: '250 km',
      image: 'https://images.pexels.com/photos/17373403/pexels-photo-17373403.jpeg'
    },
    { 
      id: 16, 
      name: 'Cadiz',
      description: "One of Europe's oldest cities, surrounded by the sea with a charming old town.",
      distance: '160 km',
      image: 'https://images.pexels.com/photos/17373404/pexels-photo-17373404.jpeg'
    },
    { 
      id: 17, 
      name: 'Almería',
      description: 'A coastal city with a rich history and beautiful beaches.',
      distance: '290 km',
      image: 'https://images.pexels.com/photos/17373405/pexels-photo-17373405.jpeg'
    },
    { 
      id: 18, 
      name: 'Antequera',
      description: 'Known as the "Heart of Andalusia," famous for its dolmens and natural park El Torcal.',
      distance: '100 km',
      image: 'https://images.pexels.com/photos/17373406/pexels-photo-17373406.jpeg'
    },
    { 
      id: 19, 
      name: 'Úbeda and Baeza',
      description: 'UNESCO World Heritage Sites known for their Renaissance architecture.',
      distance: '220 km',
      image: 'https://images.pexels.com/photos/17373407/pexels-photo-17373407.jpeg'
    },
    { 
      id: 20, 
      name: 'Setenil de las Bodegas',
      description: 'A unique town with houses built into rock formations.',
      distance: '90 km',
      image: 'https://images.pexels.com/photos/17373408/pexels-photo-17373408.jpeg'
    },
    { 
      id: 21, 
      name: 'Vejer de la Frontera',
      description: 'A beautifully preserved white village with stunning views and rich history.',
      distance: '130 km',
      image: 'https://images.pexels.com/photos/17373409/pexels-photo-17373409.jpeg'
    }
  ];

  const handleOpenMaps = (cityName: string) => {
    const query = encodeURIComponent(`${cityName}, Spain`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Explore The Area" showBackButton={false} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ImageBackground
          source={{ uri: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg' }}
          style={styles.hero}
          resizeMode="cover"
        >
          <LinearGradient
            colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
            style={styles.heroOverlay}
          >
            <Text style={styles.heroTitle}>Discover Andalusia</Text>
            <Text style={styles.heroSubtitle}>Explore beautiful cities and historic towns around Marbella</Text>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>21</Text>
            <Text style={styles.statLabel}>Cities</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>300</Text>
            <Text style={styles.statLabel}>km Radius</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100+</Text>
            <Text style={styles.statLabel}>Attractions</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Nearby Destinations</Text>

        {nearbyCities.map((city, index) => (
          <Animated.View 
            key={city.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.cityCard}
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
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.m,
  },
  hero: {
    height: 200,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
  },
  heroOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: theme.spacing.m,
  },
  heroTitle: {
    ...theme.typography.heading,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
  },
  heroSubtitle: {
    ...theme.typography.body,
    color: theme.colors.white,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.l,
    ...theme.shadows.small,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    ...theme.typography.subheading,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  statDivider: {
    width: 1,
    backgroundColor: theme.colors.border,
    marginHorizontal: theme.spacing.m,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  cityCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.m,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  cityImage: {
    width: '100%',
    height: 200,
  },
  cityImageOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cityContent: {
    padding: theme.spacing.m,
  },
  cityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: theme.spacing.m,
  },
  cityInfo: {
    flex: 1,
  },
  cityName: {
    ...theme.typography.subheading,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    marginLeft: theme.spacing.xs,
  },
  cityDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  directionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primaryLight,
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
  },
  directionsText: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    marginLeft: theme.spacing.xs,
  },
});