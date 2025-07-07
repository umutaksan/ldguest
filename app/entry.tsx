import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, Key } from 'lucide-react-native';

export default function EntryScreen() {
  const insets = useSafeAreaInsets();

  const handleWatchVideo = () => {
    Linking.openURL('https://youtube.com/shorts/XNzqKrwDKf8');
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Home Entry Instructions" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Step 1: Getting the Key Card</Text>
          <Text style={styles.description}>
            Welcome to your Jardines Tropicales apartment! Here are the entry instructions for Calle Azahar 12.
            {'\n\n'}
            The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM. To enter the house, first you need to take the black bar of the main door and the key card for entry from the designated location.
          </Text>

          <TouchableOpacity 
            style={styles.watchVideoButton}
            onPress={handleWatchVideo}
            activeOpacity={0.8}
          >
            <Video size={20} color={theme.colors.white} />
            <Text style={styles.watchVideoText}>Watch Key Pickup Video</Text>
          </TouchableOpacity>
          
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://static.wixstatic.com/media/8bbc22_e8dfb46609ce4f40afc0cafab9e28bdf~mv2.jpg/v1/fill/w_177,h_205,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_25_6ff293c6.jpg' }}
              style={styles.keyImage}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Step 2: Entering the Building</Text>
          <Text style={styles.description}>
            After taking the black bar and the key card, use the black bar to open the main door. When you reach door A on the 1st floor, you can either tap the card or enter the code on the numbered section of the keypad system. Your access code is ******#.
          </Text>
          
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://static.wixstatic.com/media/8bbc22_89c3d72a7534442ba49e2b8b24f85759~mv2.jpg/v1/fill/w_315,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_edited.jpg' }}
              style={styles.keyImage}
              resizeMode="cover"
            />
            <View style={styles.smallImagesContainer}>
              <Image 
                source={{ uri: 'https://static.wixstatic.com/media/8bbc22_160ddf38bb8444cc880f92543da1f0dd~mv2.jpg/v1/fill/w_207,h_269,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-02-23%20saat%2013_43_edited.jpg' }}
                style={styles.smallKeyImage}
                resizeMode="cover"
              />
              <Image 
                source={{ uri: 'https://static.wixstatic.com/media/8bbc22_c313378eb121483a843293b0584f1f13~mv2.jpg/v1/fill/w_303,h_269,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-02-23%20saat%2014_05_38_36e69ad5.jpg' }}
                style={styles.smallKeyImage}
                resizeMode="cover"
              />
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.watchVideoButton}
            onPress={() => Linking.openURL('https://www.youtube.com/shorts/nWXkqDrRcyU')}
            activeOpacity={0.8}
          >
            <Video size={20} color={theme.colors.white} />
            <Text style={styles.watchVideoText}>Watch Entry Instructions</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Step 3: Using the Keys</Text>
          <Text style={styles.description}>
            Here's what you need to know about the keys and entry system:
            {'\n\n'}
            1. Use the black bar to open the main entrance door
            {'\n'}2. The key set includes all necessary keys for your stay
            {'\n'}3. Scan the key card where it says "LOCK" to enter the building
          </Text>
        </View>

        <Text style={styles.note}>
          We wish you a pleasant stay.
        </Text>
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
    padding: Platform.OS === 'web' ? theme.spacing.m : theme.spacing.s,
  },
  section: {
    marginBottom: Platform.OS === 'web' ? theme.spacing.xl : theme.spacing.l,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.s,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: theme.spacing.m,
  },
  keyImage: {
    width: '48%',
    height: 220,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows.small,
  },
  smallImagesContainer: {
    width: '48%',
    justifyContent: 'space-between',
  },
  smallKeyImage: {
    width: '100%',
    height: 105,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.s,
    ...theme.shadows.small,
  },
  videoContainer: {
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    backgroundColor: theme.colors.card,
    ...theme.shadows.small,
  },
  note: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.m,
    marginBottom: Platform.OS === 'web' ? theme.spacing.m : theme.spacing.xl,
  },
  watchVideoButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  watchVideoText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
});