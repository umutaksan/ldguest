import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePathname } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { ResponsiveContainer } from '@/components/common/ResponsiveContainer';
import { Video } from 'lucide-react-native';

export default function EntryScreen() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const { width } = Dimensions.get('window');
  const imageHeight = Platform.OS === 'web' ? 180 : width * 0.3;

  // Get property-specific entry instructions
  const getEntryInstructions = () => {
    if (pathname.includes('aloha-pueblo')) {
      return {
        title: 'Aloha Pueblo Entry Instructions',
        keyboxCode: '345424#',
        cabinetCode: '290',
        doorInstructions: 'Use the door code to enter the building and apartment.',
        images: [
          'https://static.wixstatic.com/media/8bbc22_03bed3f72ceb40f2b584e81099b3eac4~mv2.jpeg/v1/fill/w_600,h_404,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-05-06%20at%2016_26_12.jpeg'
        ],
        videoUrl: null
      };
    } else if (pathname.includes('old-town')) {
      return {
        title: 'Old Town Entry Instructions',
        doorCode: '6464173#',
        cleaningCloset: 'The cleaning closet card is located under the cutlery. After taking the card, please scan it at the indicated spot to open the cleaning closet.',
        doorInstructions: 'Use the door code to enter the building.',
        images: [
          'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_333,h_445,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ads%C4%B1z%20tasar%C4%B1m.png'
        ],
        videoUrl: null
      };
    } else if (pathname.includes('seaview-fontanilla')) {
      return {
        title: 'Seaview Fontanilla Entry Instructions',
        outerDoorCode: '54321#',
        innerDoorCode: '54321#',
        apartmentDoorCode: '142536#',
        doorInstructions: 'Use the codes in sequence: outer door, inner door, then apartment door.',
        images: [
          'https://static.wixstatic.com/media/8bbc22_5a77db7dbfa84c6a9215daae75f3bc15~mv2.jpg/v1/fill/w_333,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_14_0a292a40.jpg'
        ],
        videoUrl: null
      };
    } else {
      // Default to Jardines Tropicales
      return {
        title: 'Jardines Tropicales Entry Instructions',
        keyboxCode: '030924#',
        doorCode: '5555515#',
        apartmentDoor: 'Open with black bar or Lock Card',
        doorInstructions: 'Get the key card from the keybox, then use it to enter the building.',
        images: [
          'https://ldguest.com/wp-content/uploads/2024/11/1adsiz-tasarim-1.png',
          'https://static.wixstatic.com/media/8bbc22_cd8e33bde09a4abf9fceaa4eff2d6f67~mv2.jpg/v1/fill/w_159,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_26_de854110.jpg',
          'https://static.wixstatic.com/media/8bbc22_1f7abcf379124dff99994757af9c6b4a~mv2.jpg/v1/fill/w_123,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20G%C3%B6rsel%202025-01-12%20saat%2017_05_26_3fad3c4b.jpg'
        ],
        videoUrl: 'https://youtube.com/shorts/XNzqKrwDKf8'
      };
    }
  };

  const entryData = getEntryInstructions();

  const handleWatchVideo = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title={entryData.title} />

      <ResponsiveContainer>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Entry Instructions</Text>
            <Text style={styles.description}>
              {entryData.doorInstructions}
              {'\n\n'}
              (The passwords will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.)
            </Text>

            {entryData.videoUrl && (
              <TouchableOpacity 
                style={styles.watchVideoButton}
                onPress={() => handleWatchVideo(entryData.videoUrl)}
                activeOpacity={0.8}
              >
                <Video size={20} color={theme.colors.white} />
                <Text style={styles.watchVideoText}>Watch Entry Video</Text>
              </TouchableOpacity>
            )}
            
            <View style={styles.imageGrid}>
              {entryData.images.map((imageUrl, index) => (
                <Image 
                  key={index}
                  source={{ uri: imageUrl }}
                  style={[styles.entryImage, { height: imageHeight }]}
                  resizeMode="cover"
                />
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Access Codes</Text>
            <View style={styles.codesContainer}>
              {entryData.keyboxCode && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Keybox Code:</Text>
                  <Text style={styles.codeValue}>{entryData.keyboxCode}</Text>
                </View>
              )}
              {entryData.doorCode && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Door Code:</Text>
                  <Text style={styles.codeValue}>{entryData.doorCode}</Text>
                </View>
              )}
              {entryData.outerDoorCode && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Outer Door Code:</Text>
                  <Text style={styles.codeValue}>{entryData.outerDoorCode}</Text>
                </View>
              )}
              {entryData.innerDoorCode && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Inner Door Code:</Text>
                  <Text style={styles.codeValue}>{entryData.innerDoorCode}</Text>
                </View>
              )}
              {entryData.apartmentDoorCode && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Apartment Door Code:</Text>
                  <Text style={styles.codeValue}>{entryData.apartmentDoorCode}</Text>
                </View>
              )}
              {entryData.apartmentDoor && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Apartment Door:</Text>
                  <Text style={styles.codeValue}>{entryData.apartmentDoor}</Text>
                </View>
              )}
              {entryData.cabinetCode && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Cabinet Code:</Text>
                  <Text style={styles.codeValue}>{entryData.cabinetCode}</Text>
                </View>
              )}
              {entryData.cleaningCloset && (
                <View style={styles.codeItem}>
                  <Text style={styles.codeLabel}>Cleaning Closet:</Text>
                  <Text style={styles.codeValue}>{entryData.cleaningCloset}</Text>
                </View>
              )}
            </View>
          </View>

          <Text style={styles.note}>
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
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: Platform.OS === 'web' ? -theme.spacing.xs : -theme.spacing.xxs,
  },
  entryImage: {
    width: '32%',
    borderRadius: theme.borderRadius.m,
    margin: Platform.OS === 'web' ? theme.spacing.xs : theme.spacing.xxs,
    marginBottom: theme.spacing.s,
  },
  codesContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
  codeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.s,
    paddingBottom: theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  codeLabel: {
    ...theme.typography.bodyMedium,
    flex: 1,
    marginRight: theme.spacing.m,
  },
  codeValue: {
    ...theme.typography.body,
    color: theme.colors.primary,
    flex: 2,
    textAlign: 'right',
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
  note: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.m,
    marginBottom: Platform.OS === 'web' ? theme.spacing.m : theme.spacing.xl,
  },
});