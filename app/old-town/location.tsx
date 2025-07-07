import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { MapPin, Navigation, Car, Bus, CarTaxiFront as Taxi, Building } from 'lucide-react-native';

export default function OldTownLocationScreen() {
  const insets = useSafeAreaInsets();
  
  const handleOpenMaps = () => {
    Linking.openURL('https://www.google.com/maps/dir//C.+M%C3%A1laga+29601+Marbella+M%C3%A1laga/@36.50968,-4.8809044,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7327f7d5c879af:0xd00358ba0f5ccc75');
  };

  const handleOpenBusRoute = () => {
    Linking.openURL('https://maps.app.goo.gl/pYDFhidoAYWPkQVH8');
  };

  const transportOptions = [
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
      icon: <Bus size={24} color={theme.colors.secondary} />,
      action: handleOpenBusRoute,
      actionLabel: "View Bus Stop Location"
    },
    {
      id: 3,
      title: "By Taxi/Uber",
      description: "The most convenient option from the airport (approximately 45-minute drive). Ask to be dropped at Calle Málaga in Marbella Old Town. Due to the narrow streets, the driver may need to drop you at the nearest accessible point, which might require a short walk to the exact address.",
      icon: <Taxi size={24} color={theme.colors.secondary} />
    }
  ];

  const propertyDetails = {
    name: '3+1 Marbella Old Town',
    location: 'Old Town',
    address: 'Calle Málaga',
    apartment: '1st Floor, Apartment 1',
    mapImage: 'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_333,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ads%C4%B1z%20tasar%C4%B1m.png'
  };

  const nearbyPOIs = [
    {
      name: 'Plaza de los Naranjos',
      distance: '150m (2 min walk)',
      hasVideo: false
    },
    {
      name: 'Iglesia de la Encarnación',
      distance: '200m (3 min walk)',
      hasVideo: false
    },
    {
      name: 'Avenida del Mar',
      distance: '350m (4 min walk)',
      hasVideo: false
    },
    {
      name: 'Marbella Beach',
      distance: '500m (6 min walk)',
      hasVideo: false
    },
    {
      name: 'Puerto Deportivo Marbella',
      distance: '700m (9 min walk)',
      hasVideo: false
    }
  ];
  
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
            source={{ uri: propertyDetails.mapImage }} 
            style={styles.mapImage}
            resizeMode="cover"
          />
          <View style={styles.mapOverlay}>
            <MapPin size={24} color={theme.colors.white} />
            <Text style={styles.mapOverlayText}>{propertyDetails.address}, {propertyDetails.location}</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.addressContainer}>
          <MapPin size={20} color={theme.colors.primary} />
          <View style={styles.addressContent}>
            <Text style={styles.addressText}>{propertyDetails.address}</Text>
            <Text style={styles.addressText}>{propertyDetails.apartment}</Text>
            <Text style={styles.addressText}>{propertyDetails.location}</Text>
            <Text style={styles.addressText}>29601 Marbella</Text>
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
          {nearbyPOIs.map((poi, index) => (
            <View key={index}>
              <View style={styles.poiItem}>
                <Text style={styles.poiName}>{poi.name}</Text>
                <Text style={styles.poiDistance}>{poi.distance}</Text>
              </View>
              {index < nearbyPOIs.length - 1 && <View style={styles.poiSeparator} />}
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
});