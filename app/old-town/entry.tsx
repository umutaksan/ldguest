import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, Platform, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video } from 'lucide-react-native';

export default function OldTownEntryScreen() {
  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get('window');
  const imageHeight = Platform.OS === 'web' ? 180 : width * 0.3;

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

          <View style={styles.codeSection}>
            <Text style={styles.codeTitle}>Building Access Code:</Text>
            <Text style={styles.codeText}>• Main Door: 6464173#</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cleaning Closet Access</Text>
          <Text style={styles.description}>
            The cleaning closet card is located under the cutlery. After taking the card, please scan it at the indicated spot to open the cleaning closet.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location Details</Text>
          <Text style={styles.description}>
            The apartment is located on the 1st floor, Apartment 1, in the heart of Marbella's historic Old Town.
          </Text>
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
  note: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: theme.spacing.m,
    marginBottom: Platform.OS === 'web' ? theme.spacing.m : theme.spacing.xl,
  },
});