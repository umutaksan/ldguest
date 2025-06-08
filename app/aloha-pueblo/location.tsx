import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { MapPin, Navigation, Car, Bus, CarTaxiFront as Taxi } from 'lucide-react-native';

export default function AlohaPuebloLocationScreen() {
  const insets = useSafeAreaInsets();
  
  const handleOpenMaps = () => {
    Linking.openURL('https://www.google.com/maps/dir//C.+del+Agua+Nueva+Andaluc%C3%ADa+29660+Marbella+M%C3%A1laga/@36.5112442,-4.9699271,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0xd72d61c9a5e5fdb:0xe743d3bce1ff1538!2m2!1d-4.9647772!2d36.5112357?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D');
  };

  const handleOpenBusRoute = () => {
    Linking.openURL('https://maps.app.goo.gl/pYDFhidoAYWPkQVH8');
  };

  const transportOptions = [
    {
      id: 1,
      title: "By Car",
      description: "Take the AP-7 highway, exit at Nueva Andalucía. Follow signs to Aloha Golf area.",
      icon: <Car size={24} color={theme.colors.secondary} />
    },
    {
      id: 2,
      title: "By Bus",
      description: "From Málaga Airport, take L-75 bus to Nueva Andalucía (45 min).",
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

  const propertyDetails = {
    name: '1+1 Aloha Pueblo Townhouse',
    location: 'Aloha',
    address: 'Calle del Agua',
    apartment: 'Apartment 168',
    mapImage: 'https://static.wixstatic.com/media/8bbc22_03bed3f72ceb40f2b584e81099b3eac4~mv2.jpeg/v1/fill/w_600,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-05-06%20at%2016_26_12.jpeg'
  };

  const nearbyPOIs = [
    {
      name: 'Aloha Golf Club',
      distance: '300m (4 min walk)',
      hasVideo: false
    },
    {
      name: 'Las Brisas Golf Club',
      distance: '800m (10 min walk)',
      hasVideo: false
    },
    {
      name: 'Puerto Banús',
      distance: '2 km (5 min drive)',
      hasVideo: false
    },
    {
      name: 'Nueva Andalucía Center',
      distance: '1 km (3 min drive)',
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