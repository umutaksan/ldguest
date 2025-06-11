import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { ResponsiveContainer } from '@/components/common/ResponsiveContainer';
import { MapPin, Wifi } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function PropertiesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const properties = [
    {
      id: '29051501',
      name: '1+1 Jardines Tropicales Puerto Banús',
      location: 'Nueva Andalucía',
      image: 'https://i.postimg.cc/hPNR5jmM/Whats-App-Image-2024-09-18-at-14-15-27-3.jpg',
    },
    {
      id: '29051502',
      name: '2+1 Seaview Playa de Fontanilla',
      location: 'Marbella Center',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/628787942.jpg?k=8debb78111131852bf35286c8e7e732682d6570737cf214f84c3803fce5d4806&o=',
    },
    {
      id: '29051503',
      name: '1+1 Aloha Pueblo Townhouse',
      location: 'Nueva Andalucía',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/681135350.jpg?k=fc73c36cd1371fe8efdc2e947ec5aa836557ffe9210d4e33aadbb0e8f237d43a&o=&hp=1',
    },
    {
      id: '29051504',
      name: '3+1 Marbella Old Town',
      location: 'Old Town',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/645431688.jpg?k=0d1af13e52daafe35fe9638dd024af7730169834024271f0cc2f0540393f7104&o=',
    }
  ];

  const cardHeight = theme.layout.isWeb 
    ? (theme.layout.isDesktop ? 280 : 240) 
    : 200;

  const gridColumns = theme.layout.isWeb && theme.layout.isDesktop ? 2 : 1;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ResponsiveContainer>
        <Animated.View 
          entering={FadeIn.duration(500)}
          style={styles.header}
        >
          <Image 
            source={{ uri: 'https://ldguest.com/wp-content/uploads/2024/11/1-e1730659164604.png?w=145&h=62' }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Welcome to L&D Guest</Text>
          <Text style={styles.subtitle}>Thank you for choosing us. Please select your reservation property below.</Text>
        </Animated.View>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={[
            styles.propertiesGrid,
            { 
              flexDirection: gridColumns === 2 ? 'row' : 'column',
              flexWrap: gridColumns === 2 ? 'wrap' : 'nowrap',
            }
          ]}>
            {properties.map((property, index) => (
              <Animated.View 
                key={property.id}
                entering={FadeIn.delay(index * 200)}
                style={[
                  styles.propertyCardContainer,
                  {
                    width: gridColumns === 2 ? '48%' : '100%',
                    marginRight: gridColumns === 2 && index % 2 === 0 ? '4%' : 0,
                  }
                ]}
              >
                <TouchableOpacity
                  style={[styles.propertyCard, { height: cardHeight }]}
                  onPress={() => router.push(`/property/${property.id}`)}
                  activeOpacity={0.9}
                >
                  <Image 
                    source={{ uri: property.image }}
                    style={styles.propertyImage}
                    resizeMode="cover"
                  />
                  <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.overlay}
                  >
                    <View style={styles.propertyInfo}>
                      <Text style={styles.propertyName}>{property.name}</Text>
                      <View style={styles.locationContainer}>
                        <MapPin size={16} color={theme.colors.white} />
                        <Text style={styles.locationText}>{property.location}</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>

          <View style={styles.adminButtonsContainer}>
            <TouchableOpacity
              style={styles.adminButton}
              onPress={() => router.push('/cleaning')}
            >
              <Text style={styles.adminButtonText}>Cleaning Staff Access</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.adminButton}
              onPress={() => router.push('/wifi-passwords')}
            >
              <Wifi size={16} color={theme.colors.textSecondary} style={styles.adminButtonIcon} />
              <Text style={styles.adminButtonText}>All WiFi Passwords</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ResponsiveContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: 'center',
    padding: theme.spacing.l,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    marginBottom: theme.spacing.m,
  },
  logo: {
    width: theme.layout.isWeb ? (theme.layout.isDesktop ? 180 : 145) : 145,
    height: theme.layout.isWeb ? (theme.layout.isDesktop ? 76 : 62) : 62,
    marginBottom: theme.spacing.m,
  },
  welcomeText: {
    ...theme.typography.heading,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    maxWidth: theme.layout.isWeb ? 500 : 300,
  },
  content: {
    padding: theme.spacing.m,
  },
  propertiesGrid: {
    justifyContent: 'space-between',
  },
  propertyCardContainer: {
    marginBottom: theme.spacing.m,
  },
  propertyCard: {
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    backgroundColor: theme.colors.card,
    ...theme.shadows.medium,
    // Web-specific styles
    ...(theme.layout.isWeb && {
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
    }),
  },
  propertyImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.m,
  },
  propertyInfo: {
    flex: 1,
  },
  propertyName: {
    ...theme.typography.subheading,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
    fontSize: theme.layout.isWeb ? (theme.layout.isDesktop ? 22 : 20) : 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    marginLeft: theme.spacing.xs,
  },
  adminButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.m,
  },
  adminButton: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: theme.spacing.xs,
    flexDirection: 'row',
    justifyContent: 'center',
    // Web-specific styles
    ...(theme.layout.isWeb && {
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    }),
  },
  adminButtonText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  adminButtonIcon: {
    marginRight: theme.spacing.xs,
  },
});