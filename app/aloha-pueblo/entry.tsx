import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video } from 'lucide-react-native';

export default function AlohaPuebloEntryScreen() {
  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get('window');
  const imageHeight = Platform.OS === 'web' ? 180 : width * 0.3;

  const handleWatchVideo = () => {
    Linking.openURL('https://youtube.com/shorts/-rT_D7LXwag?feature=share');
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Home Entry Instructions" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How do I reach the Aloha Pueblo house and how do I open the door?</Text>
          
          <TouchableOpacity 
            style={styles.watchVideoButton}
            onPress={handleWatchVideo}
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location Details</Text>
          <Text style={styles.description}>
            The townhouse is located in the Aloha area, close to golf courses and Nueva Andalucía center.
          </Text>
        </View>

        <Text style={styles.note}>
          We wish you a pleasant stay at Aloha Pueblo Townhouse.
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
    marginVertical: theme.spacing.m,
    alignItems: 'center',
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