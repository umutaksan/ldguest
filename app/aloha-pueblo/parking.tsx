import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, Navigation, Car } from 'lucide-react-native';

export default function AlohaPuebloParkingScreen() {
  const insets = useSafeAreaInsets();

  const handleOpenMaps = () => {
    const query = encodeURIComponent('Calle del Agua, Marbella Old Town');
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  const parkingOptions = [
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
  ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Parking Information" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.section}>
          <Text style={styles.description}>
            There is open street parking available nearby. The property does not have its own private parking.
          </Text>
        </View>
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
  section: {
    marginBottom: theme.spacing.xl,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
});