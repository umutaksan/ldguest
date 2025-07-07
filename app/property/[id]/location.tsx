import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { MapPin, Navigation, Car, Bus, CarTaxiFront as Taxi, Video } from 'lucide-react-native';

export default function LocationScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  
  // Property data based on ID
  const getPropertyData = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          name: '1+1 Jardines Tropicales Puerto Banús',
          location: 'Nueva Andalucía',
          address: 'Calle Azahar 12',
          apartment: '1st Floor, Apartment A',
          mapImage: 'https://static.wixstatic.com/media/8bbc22_4c94e82090444532a15fb6f58cd9a47a~mv2.png/v1/fill/w_540,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
          mapUrl: 'https://www.google.com/maps/dir//Calle+Azahar+Nueva+Andaluc%C3%ADa+29660+Marbella+M%C3%A1laga/@36.4885948,-4.9624318,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7329ec41f44309:0xba0923f1a5a71398',
          busUrl: 'https://maps.app.goo.gl/pYDFhidoAYWPkQVH8',
          pois: [
            { name: 'Hard Rock Hotel Marbella', distance: '50m (1 min walk)', hasVideo: false },
            { name: 'La Sala Restaurant', distance: '200m (3 min walk)', hasVideo: false },
            { name: 'Puerto Banús Marina', distance: '5 min walk (via underpass)', hasVideo: true, videoUrl: 'https://youtu.be/hAVfV32hWp8' },
            { name: 'Ocean Club Marbella', distance: '1.5 km (5 min drive)', hasVideo: false }
          ]
        };
      case '29051502': // Seaview Fontanilla
        return {
          name: '2+1 Seaview Playa de Fontanilla',
          location: 'Marbella Center',
          address: 'Calle Camilo José Cela, 7',
          apartment: '1st Floor, Apartment 106',
          mapImage: 'https://static.wixstatic.com/media/8bbc22_5a77db7dbfa84c6a9215daae75f3bc15~mv2.jpg/v1/fill/w_333,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_14_0a292a40.jpg',
          mapUrl: 'https://www.google.com/maps/dir/36.5080731,-4.8946322/C.+Camilo+Jos%C3%A9+Cela,+29602+Marbella,+M%C3%A1laga/@36.5080775,-4.8949322,20.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd732801cbc22faf:0xf815e9f3937fdcc4!2m2!1d-4.8964084!2d36.5082514?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D',
          busUrl: 'https://maps.app.goo.gl/8KjN2vF3xYWPkQVH9',
          pois: [
            { name: 'Playa de Fontanilla', distance: '50 meters (1 min walk)', hasVideo: false },
            { name: 'Paseo Marítimo', distance: '100 meters (2 min walk)', hasVideo: false },
            { name: 'Plaza del Mar', distance: '300 meters (4 min walk)', hasVideo: false },
            { name: 'Avenida del Mar', distance: '400 meters (5 min walk)', hasVideo: false },
            { name: 'Marbella Old Town', distance: '700 meters (9 min walk)', hasVideo: false },
            { name: 'Puerto Deportivo Marbella', distance: '800 meters (10 min walk)', hasVideo: false }
          ]
        };
      case '29051503': // Aloha Pueblo
        return {
          name: '1+1 Aloha Pueblo Townhouse',
          location: 'Aloha',
          address: 'Calle del Agua',
          apartment: 'Apartment 168',
          mapImage: 'https://static.wixstatic.com/media/8bbc22_03bed3f72ceb40f2b584e81099b3eac4~mv2.jpeg/v1/fill/w_600,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-05-06%20at%2016_26_12.jpeg',
          mapUrl: 'https://www.google.com/maps/dir//C.+del+Agua+Nueva+Andaluc%C3%ADa+29660+Marbella+M%C3%A1laga/@36.5112442,-4.9699271,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0xd72d61c9a5e5fdb:0xe743d3bce1ff1538!2m2!1d-4.9647772!2d36.5112357?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D',
          busUrl: 'https://maps.app.goo.gl/pYDFhidoAYWPkQVH8',
          pois: [
            { name: 'Aloha Golf Club', distance: '300m (4 min walk)', hasVideo: false },
            { name: 'Las Brisas Golf Club', distance: '800m (10 min walk)', hasVideo: false },
            { name: 'Puerto Banús', distance: '2 km (5 min drive)', hasVideo: false },
            { name: 'Nueva Andalucía Center', distance: '1 km (3 min drive)', hasVideo: false }
          ]
        };
      case '29051504': // Old Town
        return {
          name: '3+1 Marbella Old Town',
          location: 'Old Town',
          address: 'Calle Málaga',
          apartment: '1st Floor, Apartment 1',
          mapImage: 'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_333,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ads%C4%B1z%20tasar%C4%B1m.png',
          mapUrl: 'https://www.google.com/maps/dir//C.+M%C3%A1laga+29601+Marbella+M%C3%A1laga/@36.50968,-4.8809044,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7327f7d5c879af:0xd00358ba0f5ccc75',
          busUrl: 'https://maps.app.goo.gl/pYDFhidoAYWPkQVH8',
          pois: [
            { name: 'Plaza de los Naranjos', distance: '200m (3 min walk)', hasVideo: false },
            { name: 'Marbella Old Town', distance: '100m (2 min walk)', hasVideo: false },
            { name: 'Avenida del Mar', distance: '400m (5 min walk)', hasVideo: false },
            { name: 'Marbella Beach', distance: '600m (8 min walk)', hasVideo: false }
          ]
        };
      default:
        return {
          name: 'L&D Guest Property',
          location: 'Marbella',
          address: 'Address',
          apartment: 'Apartment',
          mapImage: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
          mapUrl: 'https://www.google.com/maps',
          busUrl: 'https://maps.app.goo.gl',
          pois: [
            { name: 'Point of Interest', distance: '100m', hasVideo: false }
          ]
        };
    }
  };

  const propertyData = getPropertyData();
  
  const handleOpenMaps = () => {
    Linking.openURL(propertyData.mapUrl);
  };

  const handleOpenVideoRoute = (url: string) => {
    Linking.openURL(url);
  };

  const getTransportOptions = () => {
    switch(id) {
      case '29051503': // Aloha Pueblo
        return [
          {
            id: 1,
            title: "By Car",
            description: "Take the AP-7 highway and exit at Nueva Andalucía. Follow signs to the Aloha Golf area. Navigate to Calle del Agua in the Aloha Pueblo complex. The townhouse has dedicated private parking available for your use during your stay.",
            icon: <Car size={24} color={theme.colors.secondary} />
          },
          {
            id: 2,
            title: "By Bus",
            description: "From Málaga Airport, take the L-75 bus to Puerto Banús (approximately 45 minutes). From Puerto Banús, you can take a short taxi ride (5 minutes) to Aloha Pueblo, or walk for about 20 minutes. Alternatively, you can take a bus from Marbella Bus Station to Nueva Andalucía and then walk or take a short taxi ride to Calle del Agua.",
            icon: <Bus size={24} color={theme.colors.secondary} />
          },
          {
            id: 3,
            title: "By Taxi/Uber",
            description: "This is the most convenient option from Málaga Airport (approximately 45-50 minute drive). Ask the driver to take you to Calle del Agua in Aloha Pueblo, Nueva Andalucía, Marbella. This is a well-known residential area, and most taxi and rideshare drivers are familiar with it. The fare typically ranges from €70-90 depending on time of day.",
            icon: <Taxi size={24} color={theme.colors.secondary} />
          }
        ];
      case '29051504': // Old Town
        return [
          {
            id: 1,
            title: "By Car",
            description: "Take the AP-7 highway, exit at Marbella Centro. Follow signs to Casco Antiguo (Old Town). The narrow streets of Old Town have limited street parking. We recommend using Parking Parquesol garage (5-minute walk from the apartment) for secure parking.",
            icon: <Car size={24} color={theme.colors.secondary} />
          },
          {
            id: 2,
            title: "By Bus",
            description: "From Málaga Airport, take the direct bus to Marbella Bus Station (40-45 min). From the bus station, walk east on Avenida Ricardo Soriano for about 5 minutes, then turn right into the Old Town area. Continue for another 5 minutes to reach Calle Málaga. Total walking time is approximately 10 minutes.",
            icon: <Bus size={24} color={theme.colors.secondary} />
          },
          {
            id: 3,
            title: "By Taxi/Uber",
            description: "The most convenient option from the airport (approximately 45-minute drive). Ask to be dropped at Calle Málaga in Marbella Old Town. Due to the narrow streets, the driver may need to drop you at the nearest accessible point, which might require a short walk to the exact address.",
            icon: <Taxi size={24} color={theme.colors.secondary} />
          }
        ];
      case '29051502': // Seaview Fontanilla
        return [
          {
            id: 1,
            title: "By Car",
            description: "Take the AP-7 highway, exit at Marbella Centro. Follow signs to Playa de Fontanilla.",
            icon: <Car size={24} color={theme.colors.secondary} />
          },
          {
            id: 2,
            title: "By Bus",
            description: "From Málaga Airport, take bus to Marbella Centro (40 min). Local buses available to Fontanilla Beach.",
            icon: <Bus size={24} color={theme.colors.secondary} />
          },
          {
            id: 3,
            title: "By Taxi",
            description: "Book your ride with Uber or Bolt for convenient transportation. Available 24/7 from Málaga Airport or anywhere in Marbella.",
            icon: <Taxi size={24} color={theme.colors.secondary} />
          }
        ];
      default:
        // Default to Jardines Tropicales
        return [
          {
            id: 1,
            title: "By Car",
            description: "Take the AP-7 highway, exit at Nueva Andalucía. Follow signs to Puerto Banús.",
            icon: <Car size={24} color={theme.colors.secondary} />
          },
          {
            id: 2,
            title: "By Bus",
            description: "From Málaga Airport, take L-75 bus to Puerto Banús (45 min).",
            icon: <Bus size={24} color={theme.colors.secondary} />
          },
          {
            id: 3,
            title: "By Taxi/Uber",
            description: "Book your ride with Uber or Bolt for convenient and reliable transportation. Available 24/7 from Málaga Airport or Marbella center.",
            icon: <Taxi size={24} color={theme.colors.secondary} />
          }
        ];
    }
  };
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Location" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <TouchableOpacity
          style={styles.mapContainer}
          onPress={handleOpenMaps}
          activeOpacity={0.9}
        >
          <Image 
            source={{ uri: propertyData.mapImage }} 
            style={styles.mapImage}
            resizeMode="cover"
          />
          <View style={styles.mapOverlay}>
            <MapPin size={24} color={theme.colors.white} />
            <Text style={styles.mapOverlayText}>{propertyData.address}, {propertyData.location}</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.addressContainer}>
          <MapPin size={20} color={theme.colors.primary} />
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>{propertyData.address}</Text>
            <Text style={styles.addressText}>{propertyData.apartment}</Text>
            <Text style={styles.addressText}>{propertyData.location}</Text>
            <Text style={styles.addressText}>29660 Marbella</Text>
            <Text style={styles.addressText}>Málaga, Spain</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.directionsButton}
          onPress={handleOpenMaps}
          activeOpacity={0.8}
        >
          <Navigation size={20} color={theme.colors.white} />
          <Text style={styles.directionsButtonText}>Get Directions</Text>
        </TouchableOpacity>
        
        <Text style={styles.sectionTitle}>How to Get Here</Text>
        
        {getTransportOptions().map((option) => (
          <InfoCard
            key={option.id}
            title={option.title}
            description={option.description}
            icon={option.icon}
            showChevron={!!option.action}
            onPress={option.action}
          />
        ))}
        
        <Text style={styles.sectionTitle}>Nearby Points of Interest</Text>
        
        <View style={styles.poiContainer}>
          {propertyData.pois.map((poi, index) => (
            <View key={index}>
              <View style={styles.poiItem}>
                <Text style={styles.poiName}>{poi.name}</Text>
                <Text style={styles.poiDistance}>{poi.distance}</Text>
                {poi.hasVideo && poi.videoUrl && (
                  <TouchableOpacity 
                    style={styles.watchRouteButton}
                    onPress={() => handleOpenVideoRoute(poi.videoUrl!)}
                    activeOpacity={0.8}
                  >
                    <Video size={16} color={theme.colors.white} />
                    <Text style={styles.watchRouteText}>Watch Walking Route</Text>
                  </TouchableOpacity>
                )}
              </View>
              {index < propertyData.pois.length - 1 && <View style={styles.poiSeparator} />}
            </View>
          ))}
        </View>
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
  mapContainer: {
    height: 200,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
    ...theme.shadows.medium,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapOverlayText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  addressContainer: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  addressContent: {
    marginLeft: theme.spacing.m,
  },
  addressText: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: 2,
  },
  directionsButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  directionsButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  poiContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
  poiItem: {
    paddingVertical: theme.spacing.s,
  },
  poiName: {
    ...theme.typography.bodyMedium,
    marginBottom: 2,
  },
  poiDistance: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  poiSeparator: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.s,
  },
  watchRouteButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.s,
    padding: theme.spacing.s,
    alignItems: 'center',
    marginTop: theme.spacing.s,
    alignSelf: 'flex-start',
  },
  watchRouteText: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    marginLeft: theme.spacing.xs,
  },
});