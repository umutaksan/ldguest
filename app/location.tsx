import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePathname } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { ResponsiveContainer } from '@/components/common/ResponsiveContainer';
import { MapPin, Navigation, Car, Bus, CarTaxiFront as Taxi, Video } from 'lucide-react-native';

export default function LocationScreen() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  
  // Get property-specific location data
  const getLocationData = () => {
    if (pathname.includes('aloha-pueblo')) {
      return {
        name: '1+1 Aloha Pueblo Townhouse',
        location: 'Aloha',
        address: 'Calle del Agua',
        apartment: 'Apartment 168',
        mapUrl: 'https://www.google.com/maps/dir//C.+del+Agua+Nueva+Andaluc%C3%ADa+29660+Marbella+M%C3%A1laga/@36.5112442,-4.9699271,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0xd72d61c9a5e5fdb:0xe743d3bce1ff1538!2m2!1d-4.9647772!2d36.5112357?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D',
        mapImage: 'https://static.wixstatic.com/media/8bbc22_03bed3f72ceb40f2b584e81099b3eac4~mv2.jpeg/v1/fill/w_600,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-05-06%20at%2016_26_12.jpeg',
        nearbyPlaces: [
          { name: 'Aloha Golf Club', distance: '200m (3 min walk)' },
          { name: 'Nueva Andalucía Center', distance: '500m (7 min walk)' },
          { name: 'Puerto Banús Marina', distance: '1.5 km (5 min drive)' },
          { name: 'Marbella Club Golf Resort', distance: '2 km (6 min drive)' }
        ]
      };
    } else if (pathname.includes('old-town')) {
      return {
        name: '3+1 Marbella Old Town',
        location: 'Old Town',
        address: 'Calle Málaga',
        apartment: '1st Floor, Apartment 1',
        mapUrl: 'https://www.google.com/maps/dir//C.+M%C3%A1laga+29601+Marbella+M%C3%A1laga/@36.50968,-4.8809044,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7327f7d5c879af:0xd00358ba0f5ccc75',
        mapImage: 'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_333,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ads%C4%B1z%20tasar%C4%B1m.png',
        nearbyPlaces: [
          { name: 'Plaza de los Naranjos', distance: '100m (2 min walk)' },
          { name: 'Marbella Old Town', distance: '0m (You are here!)' },
          { name: 'Avenida del Mar', distance: '300m (4 min walk)' },
          { name: 'Marbella Beach', distance: '500m (7 min walk)' }
        ]
      };
    } else if (pathname.includes('seaview-fontanilla')) {
      return {
        name: '2+1 Seaview Playa de Fontanilla',
        location: 'Marbella Center',
        address: 'Calle Camilo José Cela, 7',
        apartment: '1st Floor, Apartment 106',
        mapUrl: 'https://www.google.com/maps/dir//2960https:%2F%2Fwww.google.com%2Flocal%2Fplace%2Frap%2Fedit%2Flocation%3Frg%3Dtrue2+C.+Camilo+Jos%C3%A9+Cela,+7+29602+Marbella+M%C3%A1laga/@36.507944,-4.9358472,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd7328006b34c505:0xad1147b9af60249d!2m2!1d-4.8946477!2d36.5078821?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D',
        mapImage: 'https://static.wixstatic.com/media/8bbc22_5a77db7dbfa84c6a9215daae75f3bc15~mv2.jpg/v1/fill/w_333,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_14_0a292a40.jpg',
        nearbyPlaces: [
          { name: 'Playa de Fontanilla', distance: '50m (1 min walk)' },
          { name: 'Marbella Center', distance: '200m (3 min walk)' },
          { name: 'Alameda Park', distance: '300m (4 min walk)' },
          { name: 'Puerto Deportivo', distance: '800m (10 min walk)' }
        ]
      };
    } else {
      // Default to Jardines Tropicales
      return {
        name: '1+1 Jardines Tropicales Puerto Banús',
        location: 'Nueva Andalucía',
        address: 'Calle Azahar 12',
        apartment: '1st Floor, Apartment A',
        mapUrl: 'https://www.google.com/maps/dir//Calle+Azahar+Nueva+Andaluc%C3%ADa+29660+Marbella+M%C3%A1laga/@36.4885948,-4.9624318,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7329ec41f44309:0xba0923f1a5a71398',
        mapImage: 'https://static.wixstatic.com/media/8bbc22_4c94e82090444532a15fb6f58cd9a47a~mv2.png/v1/fill/w_540,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
        nearbyPlaces: [
          { name: 'Hard Rock Hotel Marbella', distance: '50m (1 min walk)' },
          { name: 'La Sala Restaurant', distance: '200m (3 min walk)' },
          { name: 'Puerto Banús Marina', distance: '5 min walk (via underpass)', videoUrl: 'https://youtu.be/hAVfV32hWp8' },
          { name: 'Ocean Club Marbella', distance: '1.5 km (5 min drive)' }
        ]
      };
    }
  };

  const locationData = getLocationData();

  const handleOpenMaps = () => {
    Linking.openURL(locationData.mapUrl);
  };

  const handleOpenBusRoute = () => {
    Linking.openURL('https://maps.app.goo.gl/pYDFhidoAYWPkQVH8');
  };

  const handleOpenUnderpassVideo = () => {
    Linking.openURL('https://youtu.be/hAVfV32hWp8');
  };
  
  const transportOptions = [
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
      icon: <Bus size={24} color={theme.colors.secondary} />,
      action: handleOpenBusRoute,
      actionLabel: "View Bus Stop Location"
    },
    {
      id: 3,
      title: "By Taxi",
      description: "Book your ride with Uber or Bolt for convenient and reliable transportation. Available 24/7 from Málaga Airport or Marbella center.",
      icon: <Taxi size={24} color={theme.colors.secondary} />
    }
  ];
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Location" />

      <ResponsiveContainer>
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
              source={{ uri: locationData.mapImage }} 
              style={styles.mapImage}
              resizeMode="cover"
            />
            <View style={styles.mapOverlay}>
              <MapPin size={24} color={theme.colors.white} />
              <Text style={styles.mapOverlayText}>{locationData.address}, {locationData.location}</Text>
            </View>
          </TouchableOpacity>
          
          <View style={styles.addressContainer}>
            <MapPin size={20} color={theme.colors.primary} />
            <View style={styles.addressContent}>
              <Text style={styles.addressText}>{locationData.address}</Text>
              <Text style={styles.addressText}>{locationData.apartment}</Text>
              <Text style={styles.addressText}>{locationData.location}</Text>
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
          
          {transportOptions.map((option) => (
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
            {locationData.nearbyPlaces.map((place, index) => (
              <View key={index}>
                <View style={styles.poiItem}>
                  <Text style={styles.poiName}>{place.name}</Text>
                  <Text style={styles.poiDistance}>{place.distance}</Text>
                  {place.videoUrl && (
                    <TouchableOpacity 
                      style={styles.watchRouteButton}
                      onPress={() => Linking.openURL(place.videoUrl)}
                      activeOpacity={0.8}
                    >
                      <Video size={16} color={theme.colors.white} />
                      <Text style={styles.watchRouteText}>Watch Walking Route</Text>
                    </TouchableOpacity>
                  )}
                </View>
                {index < locationData.nearbyPlaces.length - 1 && <View style={styles.poiSeparator} />}
              </View>
            ))}
          </View>
        </ScrollView>
      </ResponsiveContainer>
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
    height: theme.layout.isWeb ? (theme.layout.isDesktop ? 250 : 220) : 200,
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