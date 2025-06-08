import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Linking, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Lock, Chrome as Home, Key, Coffee, Wine, Heater as Water, Footprints, MapPin, FileText } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function CleaningScreen() {
  const insets = useSafeAreaInsets();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = '606767052';

  const properties = [
    {
      id: 1,
      name: '1+1 Jardines Tropicales Puerto Banús',
      location: 'Nueva Andalucía',
      address: 'Calle Azahar 12',
      apartment: '1st Floor, Apartment A',
      mapUrl: 'https://www.google.com/maps/dir//Calle+Azahar+Nueva+Andaluc%C3%ADa+29660+Marbella+M%C3%A1laga/@36.4885948,-4.9624318,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7329ec41f44309:0xba0923f1a5a71398',
      wifiName: 'OLIN_36407',
      wifiPassword: 'FPyPj3KN',
      keyboxCode: '030924# (Watch the location video)',
      keyboxVideo: 'https://youtube.com/shorts/XNzqKrwDKf8',
      apartmentDoor: 'Open with black bar',
      doorCode: '5555515# or Lock Card',
      cabinetCode: 'To open the lock, enter 1234 and turn the knob to the left. To lock it again, simply turn the knob to the right.'
    },
    {
      id: 2,
      name: '2+1 Seaview Playa de Fontanilla',
      location: 'Marbella Center',
      address: 'Calle Camilo José Cela, 7',
      apartment: '1st Floor, Apartment 106',
      mapUrl: 'https://www.google.com/maps/dir//2960https:%2F%2Fwww.google.com%2Flocal%2Fplace%2Frap%2Fedit%2Flocation%3Frg%3Dtrue2+C.+Camilo+Jos%C3%A9+Cela,+7+29602+Marbella+M%C3%A1laga/@36.507944,-4.9358472,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd7328006b34c505:0xad1147b9af60249d!2m2!1d-4.8946477!2d36.5078821?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D',
      wifiName: 'OLIN_60541',
      wifiPassword: 'Gnmj6f7J',
      outerDoorCode: '54321#',
      innerDoorCode: '54321#',
      apartmentDoorCode: '142536#'
    },
    {
      id: 3,
      name: '3+1 Marbella Old Town',
      location: 'Old Town',
      address: 'Calle Málaga',
      apartment: '1st Floor, Apartment 1',
      mapUrl: 'https://www.google.com/maps/dir//C.+M%C3%A1laga+29601+Marbella+M%C3%A1laga/@36.50968,-4.8809044,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0xd7327f7d5c879af:0xd00358ba0f5ccc75',
      wifiName: 'OLIN_38230',
      wifiPassword: 'ghtcdEE9',
      doorCode: '6464173#',
      cleaningCloset: 'The cleaning closet card is located under the cutlery. After taking the card, please scan it at the indicated spot to open the cleaning closet.'
    },
    {
      id: 4,
      name: '1+1 Aloha Pueblo Townhouse',
      location: 'Aloha',
      address: 'Calle del Agua',
      apartment: 'Apartment 168',
      mapUrl: 'https://www.google.com/maps/dir//C.+del+Agua+Nueva+Andaluc%C3%ADa+29660+Marbella+M%C3%A1laga/@36.5112442,-4.9699271,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0xd72d61c9a5e5fdb:0xe743d3bce1ff1538!2m2!1d-4.9647772!2d36.5112357?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D',
      wifiName: 'LDGUEST',
      wifiPassword: 'ldguest2025',
      doorCode: '345424#',
      cabinetCode: '290'
    }
  ];

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setPassword('');
    }
  };

  const handleOpenMaps = (url: string) => {
    Linking.openURL(url);
  };

  const handleOpenCleaningRules = () => {
    Linking.openURL('https://www.canva.com/design/DAGpCy3Jarw/jata95scklEn9lxPJgYqmA/view?utm_content=DAGpCy3Jarw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdd87734915');
  };

  const handleWatchVideo = (url: string) => {
    Linking.openURL(url);
  };

  const renderAmenityCheck = () => (
    <View style={styles.amenityCheckContainer}>
      <Text style={styles.amenityCheckTitle}>Required Amenities</Text>
      <View style={styles.amenityList}>
        <View style={styles.amenityItem}>
          <Coffee size={20} color={theme.colors.primary} />
          <Text style={styles.amenityText}>Coffee</Text>
        </View>
        <View style={styles.amenityItem}>
          <Wine size={20} color={theme.colors.primary} />
          <Text style={styles.amenityText}>Wine</Text>
        </View>
        <View style={styles.amenityItem}>
          <Water size={20} color={theme.colors.primary} />
          <Text style={styles.amenityText}>Water</Text>
        </View>
        <View style={styles.amenityItem}>
          <Footprints size={20} color={theme.colors.primary} />
          <Text style={styles.amenityText}>Slippers</Text>
        </View>
      </View>
      <Text style={styles.amenityNote}>
        Please ensure all amenities are provided for each property. For the number of guests, kindly check with us for confirmation.
      </Text>
    </View>
  );

  if (!isAuthenticated) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <PageHeader title="Staff Access" />
        <View style={styles.loginContainer}>
          <Lock size={48} color={theme.colors.primary} />
          <Text style={styles.loginTitle}>Staff Login Required</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Property Information" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <TouchableOpacity 
          style={styles.rulesButton}
          onPress={handleOpenCleaningRules}
        >
          <FileText size={24} color={theme.colors.white} />
          <Text style={styles.rulesButtonText}>Cleaning Rules and Important Guidelines</Text>
        </TouchableOpacity>

        {renderAmenityCheck()}

        {properties.map((property, index) => (
          <Animated.View 
            key={property.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.propertyCard}
          >
            <View style={styles.propertyHeader}>
              <Home size={24} color={theme.colors.primary} />
              <View style={styles.propertyTitleContainer}>
                <Text style={styles.propertyName}>{property.name}</Text>
                <Text style={styles.propertyLocation}>{property.location}</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.locationButton}
              onPress={() => handleOpenMaps(property.mapUrl)}
            >
              <MapPin size={20} color={theme.colors.white} />
              <Text style={styles.locationButtonText}>
                {property.address}, {property.apartment}
              </Text>
            </TouchableOpacity>

            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>WiFi Network:</Text>
                <Text style={styles.detailValue}>{property.wifiName}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>WiFi Password:</Text>
                <Text style={styles.detailValue}>{property.wifiPassword}</Text>
              </View>
              {property.keyboxCode && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Keybox Code:</Text>
                  <View style={styles.detailValueContainer}>
                    <Text style={styles.detailValue}>{property.keyboxCode}</Text>
                    {property.keyboxVideo && (
                      <TouchableOpacity
                        style={styles.videoButton}
                        onPress={() => handleWatchVideo(property.keyboxVideo)}
                      >
                        <Text style={styles.videoButtonText}>Watch Video</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              )}
              {property.id === 1 && property.apartmentDoor && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Apartment Door:</Text>
                  <Text style={styles.detailValue}>{property.apartmentDoor}</Text>
                </View>
              )}
              {property.doorCode && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Door Code:</Text>
                  <Text style={styles.detailValue}>{property.doorCode}</Text>
                </View>
              )}
              {property.outerDoorCode && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Outer Door Code:</Text>
                  <Text style={styles.detailValue}>{property.outerDoorCode}</Text>
                </View>
              )}
              {property.innerDoorCode && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Inner Door Code:</Text>
                  <Text style={styles.detailValue}>{property.innerDoorCode}</Text>
                </View>
              )}
              {property.apartmentDoorCode && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Apartment Door Code:</Text>
                  <Text style={styles.detailValue}>{property.apartmentDoorCode}</Text>
                </View>
              )}
              {property.cabinetCode && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Cabinet Code:</Text>
                  <Text style={styles.detailValue}>{property.cabinetCode}</Text>
                </View>
              )}
              {property.cleaningCloset && (
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Cleaning Closet:</Text>
                  <Text style={styles.detailValue}>{property.cleaningCloset}</Text>
                </View>
              )}
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
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xl,
  },
  loginTitle: {
    ...theme.typography.subheading,
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.l,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.m,
    paddingHorizontal: theme.spacing.m,
    marginBottom: theme.spacing.m,
    backgroundColor: theme.colors.card,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.small,
  },
  loginButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
  },
  content: {
    padding: theme.spacing.m,
  },
  rulesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.l,
    ...theme.shadows.small,
  },
  rulesButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.m,
  },
  amenityCheckContainer: {
    backgroundColor: theme.colors.primaryLight,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.l,
  },
  amenityCheckTitle: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.m,
    color: theme.colors.primary,
  },
  amenityList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.m,
    marginBottom: theme.spacing.m,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.s,
    borderRadius: theme.borderRadius.s,
    minWidth: '45%',
  },
  amenityText: {
    ...theme.typography.body,
    marginLeft: theme.spacing.s,
  },
  amenityNote: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    fontStyle: 'italic',
  },
  propertyCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  propertyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  propertyTitleContainer: {
    marginLeft: theme.spacing.m,
    flex: 1,
  },
  propertyName: {
    ...theme.typography.bodyMedium,
    marginBottom: 2,
  },
  propertyLocation: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.m,
  },
  locationButtonText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  detailsContainer: {
    marginBottom: theme.spacing.m,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.s,
  },
  detailLabel: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    flex: 1,
  },
  detailValue: {
    ...theme.typography.bodyMedium,
    flex: 2,
    textAlign: 'right',
    marginLeft: theme.spacing.m,
  },
  detailValueContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  videoButton: {
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.s,
    marginLeft: theme.spacing.s,
  },
  videoButtonText: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
  },
});