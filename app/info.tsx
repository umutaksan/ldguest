import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '@/constants/theme';
import { WebHeader } from '@/components/common/WebHeader';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <WebHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.mainContent}>
          <Text style={styles.sectionTitle}>Property Information</Text>
          <Text style={styles.description}>
            Find important information about house rules, amenities, and frequently asked questions.
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
    paddingBottom: theme.spacing.xl,
  },
  mainContent: {
    maxWidth: 1280,
    marginHorizontal: 'auto',
    width: '100%',
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    fontSize: 32,
    marginBottom: theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
});
