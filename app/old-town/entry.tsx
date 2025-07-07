import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, Play } from 'lucide-react-native';

export default function OldTownEntryScreen() {
  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get('window');
  const imageHeight = Platform.OS === 'web' ? 180 : width * 0.3;

  const handleWatchVideo = () => {
    Linking.openURL('https://youtube.com/shorts/CqmjJsOKGSk?feature=share');
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Home Entry Instructions" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Entry Instructions</Text>
          <Text style={styles.description}>
            Welcome to your Old Town apartment! Here are the entry instructions for Calle Málaga.
            {'\n\n'}
            The access codes will be sent via the platform on which you made your reservation on the day of your stay at 12:00 PM.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.description}>
            Location
            {'\n'}Edificio Sol is located on Calle Malaga. You will find our building easily identifiable.
          </Text>
          
          <Text style={styles.description}>
            Access Information
            {'\n'}• The main door to the building will be open
            {'\n\n'}• If you find it closed, please contact us immediately
            {'\n\n'}• Your apartment is number 1 on the first floor
            {'\n\n'}• The access code will be sent to you one day before your stay
          </Text>
          
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://static.wixstatic.com/media/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png/v1/fill/w_331,h_441,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8bbc22_93c95372b66e44aea663ed535ce33eda~mv2.png' }}
              style={styles.entryImage}
              resizeMode="cover"
            />
          </View>
          
          <TouchableOpacity 
            style={styles.watchVideoButton}
            onPress={handleWatchVideo}
            activeOpacity={0.8}
          >
            <Play size={20} color={theme.colors.white} />
            <Text style={styles.watchVideoText}>Watch Entry Video</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.note}>
          We wish you a pleasant stay in Marbella Old Town.
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
  codeSection: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
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
    alignItems: 'center',
    marginVertical: theme.spacing.m,
  },
  entryImage: {
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