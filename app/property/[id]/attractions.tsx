import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AttractionsScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Get attractions based on property ID
  const getAttractions = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return [
          {
            id: 1,
            name: 'Playa Puerto Banús',
            description: 'A popular beach and marina, ideal for sunbathing and enjoying the Mediterranean.',
            distance: '500 meters',
            category: 'Beach',
          },
          {
            id: 2,
            name: 'Marina Puerto Banús',
            description: 'A luxury marina filled with yachts and high-end shops.',
            distance: '600 meters',
            category: 'Marina',
          },
          {
            id: 3,
            name: 'El Corte Inglés Puerto Banús',
            description: 'A large department store offering a wide variety of products.',
            distance: '700 meters',
            category: 'Shopping',
          },
          {
            id: 4,
            name: 'Centro Plaza',
            description: 'A shopping and entertainment complex featuring shops, restaurants, and a Saturday market.',
            distance: '800 meters',
            category: 'Shopping',
          },
          {
            id: 5,
            name: 'Playa Nueva Andalucía',
            description: 'A wide beach known for its golden sands and clear waters.',
            distance: '1 km',
            category: 'Beach',
          },
          {
            id: 6,
            name: 'Museo Ralli Marbella',
            description: 'A museum showcasing contemporary Latin American art.',
            distance: '2 km',
            category: 'Culture',
          },
          {
            id: 7,
            name: 'Playa de Levante',
            description: 'A quiet and clean beach, perfect for relaxation.',
            distance: '2 km',
            category: 'Beach',
          },
          {
            id: 8,
            name: 'Playa de Rio Verde',
            description: 'A family-friendly beach with plenty of amenities.',
            distance: '2.5 km',
            category: 'Beach',
          },
          {
            id: 9,
            name: 'Iglesia de San Pedro',
            description: 'A historic church located in San Pedro de Alcántara.',
            distance: '3 km',
            category: 'Culture',
          },
          {
            id: 10,
            name: 'Bulevar San Pedro Alcántara',
            description: 'A popular boulevard with walking paths and playgrounds.',
            distance: '3.5 km',
            category: 'Park',
          }
        ];
      case '29051502': // Seaview Fontanilla
        return [
          {
            id: 1,
            name: 'Playa de Fontanilla',
            description: 'Beautiful urban beach with golden sand, sunbeds, and beach clubs. Perfect for swimming and sunbathing.',
            distance: '50 meters',
            category: 'Beach',
          },
          {
            id: 2,
            name: 'Paseo Marítimo',
            description: 'Beautiful beachfront promenade perfect for walking, running, or cycling with various restaurants and cafes.',
            distance: '100 meters',
            category: 'Promenade',
          },
          {
            id: 3,
            name: 'Plaza del Mar',
            description: 'Central square with fountains, shops, and restaurants, connecting beach area to city center.',
            distance: '300 meters',
            category: 'Plaza',
          },
          {
            id: 4,
            name: 'Avenida del Mar',
            description: 'Iconic boulevard featuring Salvador Dalí bronze sculptures and beautiful landscaping.',
            distance: '400 meters',
            category: 'Culture',
          },
          {
            id: 5,
            name: 'Parque de la Alameda',
            description: 'Historic park with tropical plants, traditional benches, and fountains.',
            distance: '600 meters',
            category: 'Park',
          },
          {
            id: 6,
            name: 'Puerto Deportivo Marbella',
            description: 'Marina with luxury yachts, restaurants, bars, and shopping opportunities.',
            distance: '800 meters',
            category: 'Marina',
          },
          {
            id: 7,
            name: 'Casco Antiguo',
            description: 'Marbella\'s charming old town with narrow streets, white buildings, and historic sites.',
            distance: '700 meters',
            category: 'Historic',
          },
          {
            id: 8,
            name: 'Plaza de los Naranjos',
            description: 'Historic square in old town with orange trees, restaurants, and traditional architecture.',
            distance: '750 meters',
            category: 'Historic',
          },
          {
            id: 9,
            name: 'Iglesia de la Encarnación',
            description: 'Historic church with mix of architectural styles in the old town.',
            distance: '800 meters',
            category: 'Religious',
          },
          {
            id: 10,
            name: 'Contemporary Spanish Engraving Museum',
            description: 'Museum featuring modern Spanish art and temporary exhibitions.',
            distance: '900 meters',
            category: 'Culture',
          },
          {
            id: 11,
            name: 'El Corte Inglés',
            description: 'Premium department store offering fashion, electronics, and gourmet food.',
            distance: '3 km',
            category: 'Shopping',
          },
          {
            id: 12,
            name: 'Centro Comercial La Cañada',
            description: 'Large shopping mall with international brands, restaurants, and entertainment options.',
            distance: '4 km',
            category: 'Shopping',
          }
        ];
      case '29051503': // Aloha Pueblo
        return [
          {
            id: 1,
            name: 'Aloha Golf Club',
            description: 'Championship 18-hole golf course designed by Javier Arana, perfect for golf enthusiasts.',
            distance: '300 meters',
            category: 'Golf',
          },
          {
            id: 2,
            name: 'Las Brisas Golf Club',
            description: 'Prestigious golf course with stunning views and challenging holes.',
            distance: '800 meters',
            category: 'Golf',
          },
          {
            id: 3,
            name: 'Los Naranjos Golf Club',
            description: 'Robert Trent Jones designed course in the heart of Golf Valley.',
            distance: '1.2 km',
            category: 'Golf',
          },
          {
            id: 4,
            name: 'Puerto Banús Marina',
            description: 'Luxury marina with high-end shops, restaurants, and beautiful yachts.',
            distance: '2 km',
            category: 'Marina',
          },
          {
            id: 5,
            name: 'Playa Puerto Banús',
            description: 'Beautiful beach with beach clubs and water sports activities.',
            distance: '2.5 km',
            category: 'Beach',
          },
          {
            id: 6,
            name: 'Centro Plaza',
            description: 'Shopping and entertainment complex with shops, restaurants, and Saturday market.',
            distance: '2.8 km',
            category: 'Shopping',
          },
          {
            id: 7,
            name: 'El Corte Inglés Puerto Banús',
            description: 'Large department store offering a wide variety of products and services.',
            distance: '3 km',
            category: 'Shopping',
          },
          {
            id: 8,
            name: 'Museo Ralli Marbella',
            description: 'Contemporary art museum showcasing Latin American artists.',
            distance: '3.5 km',
            category: 'Culture',
          },
          {
            id: 9,
            name: 'Playa Nueva Andalucía',
            description: 'Wide sandy beach perfect for families with calm waters.',
            distance: '4 km',
            category: 'Beach',
          },
          {
            id: 10,
            name: 'Marbella Old Town',
            description: 'Historic district with narrow streets, charming plazas, and traditional architecture.',
            distance: '8 km',
            category: 'Historic',
          }
        ];
      case '29051504': // Old Town
        return [
          {
            id: 1,
            name: 'Plaza de los Naranjos',
            description: 'The heart of Marbella Old Town, surrounded by orange trees and historic buildings.',
            distance: '200 meters',
            category: 'Historic',
          },
          {
            id: 2,
            name: 'Iglesia de la Encarnación',
            description: 'Beautiful 16th-century church with stunning baroque architecture.',
            distance: '150 meters',
            category: 'Religious',
          },
          {
            id: 3,
            name: 'Murallas del Castillo',
            description: 'Ancient castle walls offering glimpses into Marbella\'s medieval past.',
            distance: '100 meters',
            category: 'Historic',
          },
          {
            id: 4,
            name: 'Avenida del Mar',
            description: 'Pedestrian promenade featuring Salvador Dalí sculptures connecting old town to beach.',
            distance: '400 meters',
            category: 'Culture',
          },
          {
            id: 5,
            name: 'Museo del Grabado Español Contemporáneo',
            description: 'Museum showcasing contemporary Spanish engravings and prints.',
            distance: '300 meters',
            category: 'Culture',
          },
          {
            id: 6,
            name: 'Parque de la Alameda',
            description: 'Beautiful botanical garden with exotic plants and peaceful walkways.',
            distance: '500 meters',
            category: 'Park',
          },
          {
            id: 7,
            name: 'Casa del Corregidor',
            description: 'Historic building that now houses the town hall, featuring beautiful architecture.',
            distance: '250 meters',
            category: 'Historic',
          },
          {
            id: 8,
            name: 'Ermita de Santiago',
            description: 'Small historic chapel with significant religious and cultural importance.',
            distance: '350 meters',
            category: 'Religious',
          },
          {
            id: 9,
            name: 'Marbella Beach',
            description: 'Beautiful sandy beach just a short walk from the Old Town.',
            distance: '600 meters',
            category: 'Beach',
          },
          {
            id: 10,
            name: 'Marbella Marina',
            description: 'Modern marina with restaurants, shops, and beautiful sea views.',
            distance: '1.2 km',
            category: 'Marina',
          }
        ];
      default:
        return [
          {
            id: 1,
            name: 'Local Attraction',
            description: 'Description of the attraction.',
            distance: '100m',
            category: 'Category',
          }
        ];
    }
  };

  const attractions = getAttractions();

  const getDescription = () => {
    switch(id) {
      case '29051501':
        return 'Discover the most interesting places to visit around Jardines Tropicales. From beautiful beaches to cultural attractions, all these destinations are easily accessible from your apartment.';
      case '29051502':
        return 'Explore the most interesting places to visit around your Seaview apartment. From beautiful beaches to cultural attractions, everything is within easy walking distance.';
      case '29051503':
        return 'Explore the best attractions around your Aloha Pueblo townhouse. From world-class golf courses to beautiful beaches and cultural sites, everything is within easy reach.';
      case '29051504':
        return 'Explore the rich history and culture of Marbella\'s Old Town. From ancient castle walls to beautiful churches and charming plazas, discover the authentic Andalusian heritage right at your doorstep.';
      default:
        return 'Discover the most interesting places to visit around your property.';
    }
  };

  const handleOpenMaps = (attractionName: string) => {
    let location = '';
    switch(id) {
      case '29051501':
        location = 'Calle Azahar, Nueva Andalucía, Marbella';
        break;
      case '29051502':
        location = 'Calle Camilo José Cela, Marbella';
        break;
      case '29051503':
        location = 'Calle del Agua, Aloha, Marbella';
        break;
      case '29051504':
        location = 'Calle Málaga, Marbella Old Town';
        break;
      default:
        location = 'Marbella';
    }
    
    const query = encodeURIComponent(`${attractionName} near ${location}`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Places to Visit" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          {getDescription()}
        </Text>

        {attractions.map((attraction, index) => (
          <Animated.View 
            key={attraction.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.attractionCard}
          >
            <View style={styles.headerContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.category}>{attraction.category}</Text>
                <Text style={styles.attractionName}>{attraction.name}</Text>
              </View>
              <TouchableOpacity
                style={styles.mapsButton}
                onPress={() => handleOpenMaps(attraction.name)}
              >
                <ExternalLink size={16} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.attractionDescription}>{attraction.description}</Text>
            
            <View style={styles.distanceContainer}>
              <MapPin size={16} color={theme.colors.textTertiary} />
              <Text style={styles.distance}>{attraction.distance}</Text>
            </View>
          </Animated.View>
        ))}
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
  attractionCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.s,
  },
  nameContainer: {
    flex: 1,
    marginRight: theme.spacing.m,
  },
  attractionName: {
    ...theme.typography.bodyMedium,
  },
  mapsButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  attractionDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    marginLeft: theme.spacing.xs,
  },
});