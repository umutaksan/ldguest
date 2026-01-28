import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '@/constants/theme';
import { WebHeader } from '@/components/common/WebHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { Compass, ShoppingBag, Smartphone } from 'lucide-react-native';

export default function GuideScreen() {
  const [selectedCategory, setSelectedCategory] = useState('activities');

  const categories = [
    { id: 'activities', name: 'Activities', icon: <Compass size={20} color={theme.colors.primary} /> },
    { id: 'shopping', name: 'Shopping', icon: <ShoppingBag size={20} color={theme.colors.primary} /> },
    { id: 'apps', name: 'Useful Apps', icon: <Smartphone size={20} color={theme.colors.primary} /> },
  ];

  return (
    <View style={styles.container}>
      <WebHeader />

      <View style={styles.categoryTabs}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryTabsContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryTab,
                selectedCategory === category.id && styles.categoryTabActive
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <Text style={[
                styles.categoryTabText,
                selectedCategory === category.id && styles.categoryTabTextActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.mainContent}>
          <Text style={styles.sectionTitle}>Local Guide</Text>
          <Text style={styles.description}>
            Discover the best activities, shopping destinations, and useful apps for your stay in Marbella.
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
  categoryTabs: {
    backgroundColor: theme.colors.card,
    paddingVertical: theme.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  categoryTabsContent: {
    paddingHorizontal: theme.spacing.xl,
    maxWidth: 1280,
    marginHorizontal: 'auto',
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    borderRadius: theme.borderRadius.m,
    marginRight: theme.spacing.m,
    backgroundColor: theme.colors.surface,
  },
  categoryTabActive: {
    backgroundColor: theme.colors.primaryLight,
  },
  categoryTabText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.s,
  },
  categoryTabTextActive: {
    color: theme.colors.primary,
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
