import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { MapPin, Navigation, Car, Bus, CarTaxiFront as Taxi, Video } from 'lucide-react-native';

export default function OldTownLocationScreen() {
  const insets = useSafeAreaInsets();
  
  const handleOpenMaps = () => {
    Linking.openURL('https://www.google.com/maps/dir//C.+M%C3%A1laga+29601+Marbella+M%C3%A1laga/@36.50968,-4.8809044,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7327f7d5c879af:0xd00358ba0f5ccc75');
  };

  const handleOpenBusRoute = () => {
    Linking.openURL('https://maps.app.goo.gl/pYDFhidoAYWPkQVH8');
  };

  const handleWatchVideo = () => {
    Linking.openURL('https://youtube.com/shorts/CqmjJsOKGSk?feature=share');
  };

  const transportOptions = [
    {
      id: 1,
      title: "By Car",
      description: "Take the AP-7 highway, exit at Marbella Centro. Follow signs to Casco Antiguo (Old Town).",
      icon: <Car size={24} color={theme.colors.secondary} />
    },
    {
      id: 2,
      title: "By Bus",
      description: "From Málaga Airport, take bus to Marbella Centro (40 min). The Old Town is within walking distance.",
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
    name: '3+1 Marbella Old Town',
    location: 'Old Town',
    address: 'Calle Málaga',
    apartment: '1st Floor, Apartment 1',
    mapImage: 'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_333,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ads%C4%B1z%20tasar%C4%B1m.png'
  };

  const nearbyPOIs = [
    {
      name: 'Plaza de los Naranjos',
      distance: '200m (3 min walk)',
      hasVideo: false
    },
    {
      name: 'Marbella Old Town',
      distance: '100m (2 min walk)',
      hasVideo: false
    },
    {
      name: 'Avenida del Mar',
      distance: '400m (5 min walk)',
      hasVideo: false
    },
    {
      name: 'Marbella Beach',
      distance: '600m (8 min walk)',
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
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <Text style={styles.description}>
            Edificio Sol is located on Calle Malaga. You will find our building easily identifiable.
          </Text>
          
          <Image 
            source={{ uri: 'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_331,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png' }} 
            style={styles.mapImage}
            resizeMode="cover"
          />
          
          <Text style={styles.sectionTitle}>Access Information</Text>
          <View style={styles.accessInfo}>
            <Text style={styles.accessPoint}>• The main door to the building will be open</Text>
            <Text style={styles.accessPoint}>• If you find it closed, please contact us immediately</Text>
            <Text style={styles.accessPoint}>• Your apartment is number 1 on the first floor</Text>
            <Text style={styles.accessPoint}>• The access code will be sent to you one day before your stay</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.watchVideoButton}
            onPress={handleWatchVideo}
            activeOpacity={0.8}
          >
            <Video size={20} color={theme.colors.white} />
            <Text style={styles.watchVideoText}>Watch House Video</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },
  content: {
    padding: theme.spacing.m,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
    marginTop: theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
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
    height: 400,
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
  accessInfo: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  accessPoint: {
    ...theme.typography.body,
    marginBottom: theme.spacing.s,
  },
  watchVideoButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
  },
});