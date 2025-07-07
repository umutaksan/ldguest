import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, Navigation, Car } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ParkingScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isWeb, setIsWeb] = useState(false);
  
  useEffect(() => {
    // Safely determine if we're on web platform
    setIsWeb(Platform.OS === 'web');
  }, []);

  // Get parking information based on property ID
  const getParkingInfo = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          title: 'Free Parking Available',
          description: 'There is street parking available in front of the house where you can park your vehicle free of charge. There is no covered parking or private parking available for the property. Street parking is free.',
          image: 'https://static.wixstatic.com/media/8bbc22_4c94e82090444532a15fb6f58cd9a47a~mv2.png/v1/fill/w_540,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Azahar+12%2C+Nueva+Andaluc%C3%ADa%2C+Marbella',
          address: 'Calle Azahar 12',
          location: 'Nueva Andalucía',
          options: [
            {
              id: 1,
              name: 'Property Parking',
              description: 'Free parking available in front of the property.',
              price: 'Free',
              tips: ['Available 24/7', 'No time restrictions', 'Well-lit area', 'Street parking only']
            }
          ]
        };
      case '29051502': // Seaview Fontanilla
        return {
          title: 'Parking Near Your Apartment',
          description: 'The nearest street parking and covered parking are listed below. The property\'s parking is reserved for property owners and is not available for use.',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+Camilo+Jos%C3%A9+Cela+7%2C+Marbella',
          address: 'Calle Camilo José Cela, 7',
          location: 'Marbella Center',
          streetParkingUrl: 'https://www.google.com/maps/@36.5082219,-4.8948736,0a,90y,28.93h,76.63t/data=!3m4!1e1!3m2!1sYLKBmzpfU8LDiamKYv_stQ!2e0?source=apiv3',
          parkingAreaUrl: 'https://www.google.com/maps/dir//Parking+Arias+Maldonado+Av.+Arias+Maldonado,+s%2Fn+29602+Marbella+M%C3%A1laga/@36.508397,-4.892995,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7327ffe274dfab:0xa4d59c515e701776',
          options: [
            {
              id: 1,
              name: 'Street Parking',
              description: 'Limited street parking available on Calle Camilo José Cela and surrounding streets.',
              price: 'Paid parking zones',
              tips: ['Check parking signs for time limits', 'Use parking meters or mobile apps', 'Blue zones require payment during business hours']
            },
            {
              id: 2,
              name: 'Parking Fontanilla',
              description: 'Public parking area near Fontanilla Beach, within walking distance.',
              price: 'Hourly rates apply',
              tips: ['Popular during summer months', 'Early arrival recommended', 'Short walk to the apartment']
            },
            {
              id: 3,
              name: 'El Corte Inglés Parking',
              description: 'Underground parking at El Corte Inglés department store.',
              price: 'Hourly/daily rates',
              tips: ['Covered parking', 'Shopping validation available', '600m from apartment']
            }
          ]
        };
      case '29051503': // Aloha Pueblo
        return {
          title: 'Parking at Your Townhouse',
          description: 'Your Aloha Pueblo townhouse includes private parking, making it convenient and secure for your vehicle during your stay.',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+del+Agua%2C+Aloha%2C+Marbella',
          address: 'Calle del Agua',
          location: 'Aloha',
          options: [
            {
              id: 1,
              name: 'Townhouse Parking',
              description: 'Private parking space available at the townhouse.',
              price: 'Included',
              tips: ['Secure private parking', 'Direct access to townhouse', 'No time restrictions']
            },
            {
              id: 2,
              name: 'Aloha Golf Club Parking',
              description: 'Additional parking available at the nearby golf club.',
              price: 'Free for guests',
              tips: ['Short walk to townhouse', 'Well-lit area', 'Security cameras']
            },
            {
              id: 3,
              name: 'Street Parking',
              description: 'Limited street parking available in the Aloha area.',
              price: 'Free',
              tips: ['Check local parking signs', 'Residential area parking', 'Keep valuables out of sight']
            }
          ]
        };
      case '29051504': // Old Town
        return {
          title: 'Parking in Old Town',
          description: 'This property does not have private parking. However, there are street parking options nearby. If you are looking for a covered parking garage, you can use the one shown in the map below:',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+M%C3%A1laga%2C+Marbella+Old+Town',
          address: 'Calle Málaga',
          location: 'Old Town',
          parkingGarageUrl: 'https://www.google.com/maps/place/Parking+Parquesol/@36.508697,-4.883279,17z/data=!4m14!1m7!3m6!1s0xd732786dfc1e9d9:0xf8635c896b0f37df!2sParking+Parquesol!8m2!3d36.508697!4d-4.883279!16s%2Fg%2F11c5_0_2t0!3m5!1s0xd732786dfc1e9d9:0xf8635c896b0f37df!8m2!3d36.508697!4d-4.883279!16s%2Fg%2F11c5_0_2t0?entry=ttu'
        };
      default:
        return {
          title: 'Parking Information',
          description: 'Here are the parking options available near your property.',
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Marbella',
          address: 'Address',
          location: 'Location',
          options: [
            {
              id: 1,
              name: 'Street Parking',
              description: 'Limited street parking available in the area.',
              price: 'Varies',
              tips: ['Check local parking signs', 'Time restrictions may apply']
            }
          ]
        };
    }
  };

  const parkingInfo = getParkingInfo();

  const handleOpenMaps = () => {
    Linking.openURL(parkingInfo.mapUrl);
  };

  const handleOpenStreetParking = () => {
    if (parkingInfo.streetParkingUrl) {
      Linking.openURL(parkingInfo.streetParkingUrl);
    }
  };

  const handleOpenParkingArea = () => {
    if (parkingInfo.parkingAreaUrl) {
      Linking.openURL(parkingInfo.parkingAreaUrl);
    }
  };

  const handleOpenParkingGarage = () => {
    if (parkingInfo.parkingGarageUrl) {
      Linking.openURL(parkingInfo.parkingGarageUrl);
    }
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Parking Information" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{parkingInfo.title}</Text>
            <Text style={styles.description}>{parkingInfo.description}</Text>

            {id === '29051504' && (
              <View style={styles.mapContainer}>  
                {isWeb ? (
                  <View 
                    style={styles.iframeContainer}
                    dangerouslySetInnerHTML={{
                      __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d400.86031951365055!2d-4.883279!3d36.508697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732786dfc1e9d9%3A0xf8635c896b0f37df!2sParking%20Parquesol!5e0!3m2!1str!2ses!4v1751890460090!5m2!1str!2ses" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
                    }}
                  />
                ) : (
                  <TouchableOpacity
                    style={styles.mapPlaceholder}
                    onPress={handleOpenParkingGarage}
                  >
                    <Text style={styles.mapPlaceholderText}>Open Parking Garage Map</Text>
                    <MapPin size={24} color={theme.colors.primary} />
                  </TouchableOpacity>
                )}
              </View>
            )}

            {parkingInfo.image && (
              <Image 
                source={{ uri: parkingInfo.image }}
                style={styles.parkingImage}
                resizeMode="cover"
              />
            )}

            {id !== '29051503' && (
              <TouchableOpacity 
                style={styles.directionsButton}
                onPress={handleOpenMaps}
                activeOpacity={0.8}
              >
                <Navigation size={20} color={theme.colors.white} />
                <Text style={styles.directionsButtonText}>Get Directions to {id === '29051503' ? 'Townhouse' : 'Apartment'}</Text>
              </TouchableOpacity>
            )}
            
            {id === '29051504' && (
              <TouchableOpacity 
                style={[styles.directionsButton, { marginTop: theme.spacing.m, backgroundColor: theme.colors.secondary }]}
                onPress={handleOpenParkingGarage}
                activeOpacity={0.8}
          {id !== '29051503' && id !== '29051504' && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>General Parking Tips</Text>
              <View style={styles.generalTipsContainer}>
                {id === '29051502' ? (
                  <>
                    <Text style={styles.tip}>• Download parking apps like EasyPark or Telpark</Text>
                    <Text style={styles.tip}>• Blue zones require payment Monday-Friday 9:00-14:00 & 17:00-20:00</Text>
                    <Text style={styles.tip}>• Saturday mornings also require payment in some areas</Text>
                    <Text style={styles.tip}>• Always check parking signs for specific regulations</Text>
                    <Text style={styles.tip}>• Keep valuables out of sight in your vehicle</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.tip}>• Your {id === '29051503' ? 'townhouse' : 'apartment'} includes {id === '29051501' || id === '29051503' ? 'free parking' : 'nearby paid parking options'}</Text>
                    <Text style={styles.tip}>• The area is generally safe for parking</Text>
                    <Text style={styles.tip}>• Keep valuables out of sight in your vehicle</Text>
                    <Text style={styles.tip}>• Lock your vehicle at all times</Text>
                    <Text style={styles.tip}>• Check local parking signs for any restrictions</Text>
                  </>
                )}
              </View>
            </View>
          )}

          {parkingInfo.options && parkingInfo.options.map((option, index) => (
            <Animated.View 
              key={option.id}
              entering={FadeIn.delay(index * 200)}
              style={styles.parkingCard}
            >
              <View style={styles.parkingHeader}>
                <Car size={24} color={theme.colors.primary} />
                <View style={styles.parkingInfo}>
                  <Text style={styles.parkingName}>{option.name}</Text>
                  <Text style={styles.parkingPrice}>{option.price}</Text>
                </View>
              </View>
              
              <Text style={styles.parkingDescription}>{option.description}</Text>
              
              <View style={styles.tipsContainer}>
                <Text style={styles.tipsTitle}>Features:</Text>
                {option.tips.map((tip, tipIndex) => (
                  <Text key={tipIndex} style={styles.tip}>• {tip}</Text>
                ))}
              </View>
            </Animated.View>
          ))}

          {id !== '29051504' && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>General Parking Tips</Text>
              <View style={styles.generalTipsContainer}>
                {id === '29051502' ? (
                  <>
                    <Text style={styles.tip}>• Download parking apps like EasyPark or Telpark</Text>
                    <Text style={styles.tip}>• Blue zones require payment Monday-Friday 9:00-14:00 & 17:00-20:00</Text>
                    <Text style={styles.tip}>• Saturday mornings also require payment in some areas</Text>
                    <Text style={styles.tip}>• Always check parking signs for specific regulations</Text>
                    <Text style={styles.tip}>• Keep valuables out of sight in your vehicle</Text>
                  </>
                ) : (
                  <>
                    <Text style={styles.tip}>• Your {id === '29051503' ? 'townhouse' : 'apartment'} includes {id === '29051501' || id === '29051503' ? 'free parking' : 'nearby paid parking options'}</Text>
                    <Text style={styles.tip}>• The area is generally safe for parking</Text>
                    <Text style={styles.tip}>• Keep valuables out of sight in your vehicle</Text>
                    <Text style={styles.tip}>• Lock your vehicle at all times</Text>
                    <Text style={styles.tip}>• Check local parking signs for any restrictions</Text>
                  </>
                )}
              </View>
            </View>
          )}
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
  content: {
    padding: theme.spacing.m,
  },
  mapContainer: {
    width: '100%',
    height: 450,
    marginVertical: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    ...theme.shadows.medium,
  },
  iframeContainer: {
    width: '100%',
    height: '100%',
  },
  mapPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.m,
    color: theme.colors.primary,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  parkingImage: {
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  directionsButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
  },
  directionsButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  parkingTip: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.s,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: theme.spacing.m,
  },
  parkingCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  parkingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  parkingInfo: {
    marginLeft: theme.spacing.m,
    flex: 1,
  },
  parkingName: {
    ...theme.typography.bodyMedium,
    marginBottom: 2,
  },
  parkingPrice: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
  },
  parkingDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  tipsContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.s,
    padding: theme.spacing.s,
  },
  tipsTitle: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.xs,
  },
  tip: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  generalTipsContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
});