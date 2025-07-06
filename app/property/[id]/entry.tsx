import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Linking, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { ResponsiveContainer } from '@/components/common/ResponsiveContainer';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video } from 'lucide-react-native';

export default function EntryScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width } = useWindowDimensions();

  // Get entry instructions based on property ID
  const getEntryInstructions = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          title: 'Jardines Tropicales Entry Instructions',
          description: 'Welcome to your Jardines Tropicales apartment! Here are the entry instructions for Calle Azahar 12.',
          note: 'The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.',
          note2: 'To enter the house, first:\nYou need to take the black bar of the main door and the key card for entry from the designated location shown here.',
          videoUrl: 'https://youtube.com/shorts/XNzqKrwDKf8',
          entryVideoUrl: 'https://www.youtube.com/shorts/nWXkqDrRcyU',
          hasKeyImages: true,
          keyImages: [
            'https://ldguest.com/wp-content/uploads/2024/11/1adsiz-tasarim-1.png',
            'https://static.wixstatic.com/media/8bbc22_cd8e33bde09a4abf9fceaa4eff2d6f67~mv2.jpg/v1/fill/w_159,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_26_de854110.jpg',
            'https://static.wixstatic.com/media/8bbc22_1f7abcf379124dff99994757af9c6b4a~mv2.jpg/v1/fill/w_123,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_26_3fad3c4b.jpg'
          ]
        };
      case '29051502': // Seaview Fontanilla
        return {
          title: 'Seaview Fontanilla Entry Instructions',
          description: 'Welcome to your Seaview apartment! Here are the entry instructions for Bolta Playa de Fontanilla Building.',
          note: 'Your apartment is number 106 on the 1st floor of the building. The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.',
          importantNote: 'You will need three separate codes to access the property:\n• 1st code: Outer building door\n• 2nd code: Inner building door\n• 3rd code: Apartment door\n\nPlease save all three codes, as you will need them during your stay.',
          hasKeyImages: true,
          keyImages: [
            'https://static.wixstatic.com/media/8bbc22_5a77db7dbfa84c6a9215daae75f3bc15~mv2.jpg/v1/fill/w_328,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_14_0a292a40.jpg',
            'https://static.wixstatic.com/media/8bbc22_b4c29ebf78b64d30a2c70e60b415a877~mv2.jpg/v1/fill/w_328,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_09_a8cef1b7.jpg'
          ],
          videoUrl: 'https://youtube.com/shorts/QhwtLiHdeRY?feature=share'
        };
      case '29051503': // Aloha Pueblo
        return {
          title: 'Aloha Pueblo Entry Instructions',
          description: 'Welcome to your Aloha Pueblo townhouse! Here are the entry instructions for Calle del Agua, Apartment 168.',
          note: 'The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.',
          hasKeyImages: false,
          videoUrl: 'https://youtube.com/shorts/-rT_D7LXwag?feature=share'
        };
      case '29051504': // Old Town
        return {
          title: 'Old Town Entry Instructions',
          description: 'Welcome to your Old Town apartment! Here are the entry instructions for Calle Málaga.',
          note: 'The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.',
          cleaningCloset: 'The cleaning closet card is located under the cutlery. After taking the card, please scan it at the indicated spot to open the cleaning closet.',
          hasKeyImages: false
        };
      default:
        return {
          title: 'Entry Instructions',
          description: 'Welcome to your L&D Guest property! Here are the entry instructions.',
          note: 'The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.',
          hasKeyImages: false
        };
    }
  };

  const entryInstructions = getEntryInstructions();

  const handleWatchVideo = (url: string) => {
    Linking.openURL(url);
  };

  // Determine if we're on a large screen
  const isLargeScreen = width > 1024;
  const isMediumScreen = width > 768 && width <= 1024;

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Home Entry Instructions" />
      
      <ResponsiveContainer 
        maxWidth={isLargeScreen ? 1200 : isMediumScreen ? 900 : 600}
        style={styles.responsiveContainer}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.content,
            isLargeScreen && styles.contentLarge
          ]}>
          <View style={[
            styles.mainContent,
            isLargeScreen && styles.mainContentLarge
          ]}>
            <View style={[
              styles.section,
              isLargeScreen && styles.sectionLarge
            ]}>
              <Text style={[
                styles.sectionTitle,
                isLargeScreen && styles.sectionTitleLarge
              ]}>Entry Instructions</Text>
              <Text style={[
                styles.description,
                isLargeScreen && styles.descriptionLarge
              ]}>
                {entryInstructions.description}
                {'\n\n'}
                {entryInstructions.note}
                {entryInstructions.note2 && '\n\n' + entryInstructions.note2}
              </Text>

            {id === '29051503' && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>How do I reach the Aloha Pueblo house and how do I open the door?</Text>
                
                <TouchableOpacity 
                  style={styles.watchVideoButton}
                  onPress={() => handleWatchVideo(entryInstructions.videoUrl!)}
                  activeOpacity={0.8}
                >
                  <Video size={20} color={theme.colors.white} />
                  <Text style={styles.watchVideoText}>Watch Entry Instructions</Text>
                </TouchableOpacity>

                <View style={styles.imageContainer}>
                  <Image 
                    source={{ uri: 'https://static.wixstatic.com/media/8bbc22_03bed3f72ceb40f2b584e81099b3eac4~mv2.jpeg/v1/crop/x_0,y_338,w_3024,h_2754/fill/w_366,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-05-06%20at%2016_26_12.jpeg' }}
                    style={styles.mainImage}
                    resizeMode="cover"
                  />
                </View>

                <Text style={styles.description}>
                  The pool entrance keys are in the house where you will be staying.
                </Text>

                <View style={styles.imageContainer}>
                  <Image 
                    source={{ uri: 'https://static.wixstatic.com/media/8bbc22_6dc1f4494ca4479b83079814d5d6fc16~mv2.jpeg/v1/crop/x_0,y_892,w_1152,h_683/fill/w_334,h_198,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-05-09%20at%2002_03_20.jpeg' }}
                    style={styles.poolImage}
                    resizeMode="cover"
                  />
                </View>
              </View>
            )}

            {entryInstructions.keyboxCode && (
              <View style={styles.codeSection}>
                <Text style={styles.codeTitle}>Building Access Codes:</Text>
                <Text style={styles.codeText}>• Main Door: {entryInstructions.keyboxCode}</Text>
              </View>
            )}

            {entryInstructions.importantNote && (
              <View style={styles.codeSection}>
                <Text style={styles.codeTitle}>Important Note:</Text>
                <Text style={styles.codeText}>{entryInstructions.importantNote}</Text>
              </View>
            )}

            {entryInstructions.videoUrl && id !== '29051503' && (
              <TouchableOpacity 
                style={styles.watchVideoButton}
                onPress={() => handleWatchVideo(entryInstructions.videoUrl!)}
                activeOpacity={0.8}
              >
                <Video size={20} color={theme.colors.white} />
                <Text style={styles.watchVideoText}>Watch Entry Video</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={[
            styles.imagesSection,
            isLargeScreen && styles.imagesSectionLarge,
            isMediumScreen && styles.imagesSectionMedium
          ]}>
            {entryInstructions.hasKeyImages && (
              <View style={[
                styles.imageContainer,
                isLargeScreen && styles.imageContainerLarge
              ]}>
                {entryInstructions.keyImages?.map((image, index) => (
                  <Image 
                    key={index}
                    source={{ uri: image }}
                    style={[
                      styles.keyImage,
                      isLargeScreen && styles.keyImageLarge
                    ]}
                    resizeMode="cover"
                  />
                ))}
              </View>
            )}
          </View>

          {entryInstructions.entryVideoUrl && (
            <View style={styles.section}>
              <Text style={[
                styles.sectionTitle,
                isLargeScreen && styles.sectionTitleLarge
              ]}>Entering the Building</Text>
              <Text style={[
                styles.description,
                isLargeScreen && styles.descriptionLarge
              ]}>
                After taking the black bar and the key card, use the black bar to open the main door as shown. When you reach door A on the 1st floor, you can either tap the card or enter the code on the numbered section of the keypad system.
              </Text>
              
              <TouchableOpacity 
                style={styles.watchVideoButton}
                onPress={() => handleWatchVideo(entryInstructions.entryVideoUrl!)}
                activeOpacity={0.8}
              >
                <Video size={20} color={theme.colors.white} />
                <Text style={styles.watchVideoText}>Watch Entry Instructions</Text>
              </TouchableOpacity>
            </View>
          )}

          {entryInstructions.cleaningCloset && (
            <View style={styles.section}>
              <Text style={[
                styles.sectionTitle,
                isLargeScreen && styles.sectionTitleLarge
              ]}>Cleaning Closet Access</Text>
              <Text style={[
                styles.description,
                isLargeScreen && styles.descriptionLarge
              ]}>
                {entryInstructions.cleaningCloset}
              </Text>
            </View>
          )}

          <View style={styles.section}>
            <Text style={[
              styles.sectionTitle,
              isLargeScreen && styles.sectionTitleLarge
            ]}>Location Details</Text>
            <Text style={[
              styles.description,
              isLargeScreen && styles.descriptionLarge
            ]}>
              The apartment is located in {id === '29051502' ? 'Marbella Center, close to the beach.' : 
                                          id === '29051503' ? 'the Aloha area, close to golf courses and Nueva Andalucía center.' : 
                                          id === '29051504' ? 'the heart of Marbella\'s historic Old Town.' : 
                                          'Nueva Andalucía, close to Puerto Banús.'}
            </Text>
          </View>

          <Text style={[
            styles.note,
            isLargeScreen && styles.noteLarge
          ]}>
            We wish you a pleasant stay.
          </Text>
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
  responsiveContainer: {
    flex: 1,
  },
  content: {
    padding: Platform.OS === 'web' ? theme.spacing.m : theme.spacing.s,
  },
  contentLarge: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: theme.spacing.xl,
  },
  mainContent: {
    width: '100%',
  },
  mainContentLarge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  section: {
    marginBottom: Platform.OS === 'web' ? theme.spacing.xl : theme.spacing.l,
  },
  sectionLarge: {
    width: '60%',
  },
  imagesSection: {
    marginBottom: Platform.OS === 'web' ? theme.spacing.xl : theme.spacing.l,
  },
  imagesSectionMedium: {
    width: '100%',
  },
  imagesSectionLarge: {
    flex: 1,
    width: '35%',
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.s,
  },
  sectionTitleLarge: {
    fontSize: 24,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  descriptionLarge: {
    fontSize: 18,
    lineHeight: 28,
  },
  codeSection: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  codeTitle: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.s,
  },
  codeText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.m,
    marginTop: theme.spacing.m,
  },
  imageContainerLarge: {
    marginTop: theme.spacing.xl,
  },
  keyImage: {
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows.small,
  },
  keyImageLarge: {
    height: 250,
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows.small,
  },
  poolImage: {
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows.small,
  },
  note: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.m,
    marginBottom: Platform.OS === 'web' ? theme.spacing.m : theme.spacing.xl,
  },
  noteLarge: {
    fontSize: 18,
  },
  watchVideoButton: {
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.m,
    ...theme.shadows.small,
  },
  watchVideoText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
});