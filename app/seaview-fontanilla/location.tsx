import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { MapPin, Navigation, Car, Bus, CarTaxiFront as Taxi, Video } from 'lucide-react-native';

export default function SeaviewLocationScreen() {
  const insets = useSafeAreaInsets();
  
  const handleOpenMaps = () => {
    Linking.openURL('https://www.google.com/maps/dir/36.5080731,-4.8946322/C.+Camilo+Jos%C3%A9+Cela,+29602+Marbella,+M%C3%A1laga/@36.5080775,-4.8949322,20.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd732801cbc22faf:0xf815e9f3937fdcc4!2m2!1d-4.8964084!2d36.5082514?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D');
  };

  const handleOpenBusRoute = () => {
    Linking.openURL('https://maps.app.goo.gl/8KjN2vF3xYWPkQVH9');
  };

  const transportOptions = [
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
      icon: <Bus size={24} color={theme.colors.secondary} />,
      action: handleOpenBusRoute,
      actionLabel: "View Bus Stop Location"
    },
    {
      id: 3,
      title: "By Taxi",
      description: "Book your ride with Uber or Bolt for convenient transportation. Available 24/7 from Málaga Airport or anywhere in Marbella.",
      icon: <Taxi size={24} color={theme.colors.secondary} />
    }
  ];

  const propertyDetails = {
    name: '2+1 Seaview Playa de Fontanilla',
    location: 'Marbella Center',
    address: 'Calle Camilo José Cela, 7',
    apartment: '1st Floor, Apartment 106',
    mapImage: 'https://static.wixstatic.com/media/8bbc22_5a77db7dbfa84c6a9215daae75f3bc15~mv2.jpg/v1/fill/w_333,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_14_0a292a40.jpg'
  };

  const nearbyPOIs = [
    {
      name: 'Playa de Fontanilla',
      distance: '50 meters (1 min walk)',
      hasVideo: false
    },
    {
      name: 'Paseo Marítimo',
      distance: '100 meters (2 min walk)',
      hasVideo: false
    },
    {
      name: 'Plaza del Mar',
      distance: '300 meters (4 min walk)',
      hasVideo: false
    },
    {
      name: 'Avenida del Mar',
      distance: '400 meters (5 min walk)',
      hasVideo: false
    },
    {
      name: 'Marbella Old Town',
      distance: '700 meters (9 min walk)',
      hasVideo: false
    },
    {
      name: 'Puerto Deportivo Marbella',
      distance: '800 meters (10 min walk)',
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
            <Text style={styles.addressText}>29602 Marbella</Text>
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