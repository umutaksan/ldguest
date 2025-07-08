import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Linking, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Play, Video } from 'lucide-react-native';

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
            'https://static.wixstatic.com/media/8bbc22_160ddf38bb8444cc880f92543da1f0dd~mv2.jpg/v1/fill/w_207,h_269,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-02-23%20saat%2013_43_edited.jpg',
            'https://static.wixstatic.com/media/8bbc22_c313378eb121483a843293b0584f1f13~mv2.jpg/v1/fill/w_303,h_269,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-02-23%20saat%2014_05_38_36e69ad5.jpg'
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
          description: 'Location\nEdificio Sol is located on Calle Malaga. You will find our building easily identifiable.',
          note: 'Access Information\n• The main door to the building will be open\n\n• If you find it closed, please contact us immediately\n\n• Your apartment is number 1 on the first floor\n\n• The access code will be sent to you one day before your stay',
          hasKeyImages: true,
          keyImages: [
            'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_331,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png'
          ],
          videoUrl: 'https://youtube.com/shorts/CqmjJsOKGSk?feature=share'
        };
      default:
        return {
          description: 'Location\nEdificio Sol is located on Calle Malaga. You will find our building easily identifiable.',
          note: 'Access Information\n• The main door to the building will be open\n\n• If you find it closed, please contact us immediately\n\n• Your apartment is number 1 on the first floor\n\n• The access code will be sent to you one day before your stay',
          hasKeyImages: true,
          keyImages: [
            'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_331,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png'
          ],
          videoUrl: 'https://youtube.com/shorts/CqmjJsOKGSk?feature=share'
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

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          isLargeScreen && styles.contentLarge
        ]}
      >
        {id === '29051501' && (
          <View style={styles.mainContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Step 1: Getting the Key Card</Text>
              <Text style={styles.description}>
                Welcome to your Jardines Tropicales apartment! Here are the entry instructions for Calle Azahar 12.
                {'\n\n'}
                The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM. To enter the house, first you need to take the black bar of the main door and the key card for entry from the designated location.
              </Text>

              <TouchableOpacity 
                style={styles.watchVideoButton}
                onPress={() => handleWatchVideo('https://youtube.com/shorts/XNzqKrwDKf8')}
                activeOpacity={0.8}
              >
                <Video size={20} color={theme.colors.white} />
                <Text style={styles.watchVideoText}>Watch Key Pickup Video</Text>
              </TouchableOpacity>
              
              <View style={styles.imageContainer}>
              </View>
            </View>
          </View>
        )}

        <View style={[
          styles.mainContent,
          isLargeScreen && styles.mainContentLarge
        ]}>
          <View style={[
            styles.section,
            isLargeScreen && styles.sectionLarge
          ]}> 
            {id === '29051501' && (
              <>
                <Text style={[
                  styles.sectionTitle,
                  isLargeScreen && styles.sectionTitleLarge
                ]}>Entry Instructions</Text>
                <Text style={[
                  styles.description,
                  isLargeScreen && styles.descriptionLarge
                ]}>
                  Welcome to your Jardines Tropicales apartment! Here are the entry instructions for Calle Azahar 12.
                  {'\n\n'}
                  The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.
                  {'\n\n'}
                  To enter the house, first:
                  {'\n'}You need to take the black bar of the main door and the key card for entry from the designated location shown here.
                </Text>
                
                <TouchableOpacity 
                  style={styles.watchVideoButton}
                  onPress={() => handleWatchVideo('https://youtube.com/shorts/XNzqKrwDKf8')}
                  activeOpacity={0.8}
                >
                  <Play size={20} color={theme.colors.white} />
                  <Text style={styles.watchVideoText}>Watch Entry Video</Text>
                </TouchableOpacity>
                
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
                  onPress={() => handleWatchVideo('https://www.youtube.com/shorts/nWXkqDrRcyU')}
                  activeOpacity={0.8}
                >
                  <Play size={20} color={theme.colors.white} />
                  <Text style={styles.watchVideoText}>Watch Entry Instructions</Text>
                </TouchableOpacity>
                
                <Text style={[
                  styles.sectionTitle,
                  isLargeScreen && styles.sectionTitleLarge
                ]}>Location Details</Text>
                <Text style={[
                  styles.description,
                  isLargeScreen && styles.descriptionLarge
                ]}>
                  The apartment is located in Nueva Andalucía, close to Puerto Banús.
                </Text>
              </>
            )}
            
            {id !== '29051501' && (
              <>
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
              </>
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
                onPress={() => handleWatchVideo(entryInstructions.videoUrl)}
                activeOpacity={0.8}
              >
                <Play size={20} color={theme.colors.white} />
                <Text style={styles.watchVideoText}>Watch Entry Video</Text>
              </TouchableOpacity>
            )}
          </View>

          {entryInstructions.hasKeyImages && (
            <View style={[
              styles.imagesSection,
              isLargeScreen && styles.imagesSectionLarge
            ]}>
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
            </View>
          )}
        </View>

        {id === '29051501' && (
          <View style={styles.section}>
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
          </View>
        )}

        <Text style={[
          styles.note,
          isLargeScreen && styles.noteLarge
        ]}>
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
  contentLarge: {
    maxWidth: 1200,
    alignSelf: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
  mainContent: {
    width: '100%',
  },
  mainContentLarge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  imagesSectionLarge: {
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
    marginVertical: theme.spacing.m,
  },
  smallImagesContainer: {
    width: '48%',
    justifyContent: 'space-between',
  },
  imageContainerLarge: {
    marginTop: theme.spacing.xl,
  },
  keyImage: {
    width: '100%',
    height: 'auto',
    aspectRatio: 331/441,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows.small,
  },
  keyImageLarge: {
    height: 'auto',
  },
  smallKeyImage: {
    width: '100%',
    height: 105,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.s,
    ...theme.shadows.small,
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