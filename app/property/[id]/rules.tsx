import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Moon, Users, Clock, Dog, CookingPot as Smoking, Heart, Bed, Music, LogOut, Chrome as Home } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function RulesScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Get community rules based on property ID
  const getCommunityRules = () => {
    switch(id) {
      case '29051504': // Old Town
        return [
          {
            id: 1,
            icon: <Moon size={24} color={theme.colors.primary} />,
            title: 'Quiet Hours',
            description: 'Quiet hours are from 11:00 PM to 8:00 AM. Please avoid making noise during these hours.',
          },
          {
            id: 2,
            icon: <Users size={24} color={theme.colors.primary} />,
            title: 'Historic Area Respect',
            description: 'Please be respectful of the historic neighborhood and its residents. Keep noise levels low and maintain the charm of the Old Town.',
          },
        ];
      default:
        return [
          {
            id: 1,
            icon: <Moon size={24} color={theme.colors.primary} />,
            title: 'Quiet Hours',
            description: 'Quiet hours are from 11:00 PM to 8:00 AM. Please avoid making noise during these hours.',
          },
          {
            id: 2,
            icon: <Users size={24} color={theme.colors.primary} />,
            title: 'Common Areas',
            description: 'When using the pool, garden, or other shared spaces, please keep them clean and tidy. Be considerate of others in the community.',
          },
        ];
    }
  };

  const communityRules = getCommunityRules();

  const houseRules = [
    {
      id: 1,
      icon: <Clock size={24} color={theme.colors.secondary} />,
      title: 'Check-In and Check-Out Times',
      description: '• Check-in: After 3:00 PM\n• Check-out: Before 10:00 AM',
    },
    {
      id: 2,
      icon: <Dog size={24} color={theme.colors.secondary} />,
      title: 'Pets',
      description: 'You are welcome to bring your pets, but please inform us in advance.',
    },
    {
      id: 3,
      icon: <Smoking size={24} color={theme.colors.secondary} />,
      title: 'Smoking',
      description: 'Smoking is not allowed inside the house. You may smoke on the balcony or in outdoor areas.',
    },
    {
      id: 4,
      icon: <Heart size={24} color={theme.colors.secondary} />,
      title: 'Handle With Care',
      description: 'Please treat the house with care and respect. If any damage occurs or issues arise, let us know as soon as possible.',
    },
    {
      id: 5,
      icon: <Bed size={24} color={theme.colors.secondary} />,
      title: 'Towels and Linens',
      description: 'Provided towels are for indoor use only. Please bring your own towels for the beach.',
    },
    {
      id: 6,
      icon: <Music size={24} color={theme.colors.secondary} />,
      title: 'Parties and Events',
      description: 'Hosting parties or large events is not allowed.',
    },
    {
      id: 7,
      icon: <LogOut size={24} color={theme.colors.secondary} />,
      title: 'Check-Out Instructions',
      description: '• When leaving, ensure you return the keys to the designated location\n• Double-check that you haven\'t left behind any personal belongings',
    },
    {
      id: 8,
      icon: <Home size={24} color={theme.colors.secondary} />,
      title: 'Enjoy Your Stay',
      description: 'We are delighted to host you! We hope you have a relaxing and memorable vacation. If you need any assistance, feel free to contact us.',
    },
  ];

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="House Rules" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Community Rules</Text>
            {communityRules.map((rule, index) => (
              <Animated.View 
                key={rule.id}
                entering={FadeIn.delay(index * 100)}
                style={styles.ruleCard}
              >
                <View style={[styles.iconContainer, { backgroundColor: theme.colors.primaryLight }]}>
                  {rule.icon}
                </View>
                <View style={styles.ruleContent}>
                  <Text style={styles.ruleTitle}>{rule.title}</Text>
                  <Text style={styles.ruleDescription}>{rule.description}</Text>
                </View>
              </Animated.View>
            ))}
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>House Rules</Text>
            {houseRules.map((rule, index) => (
              <Animated.View 
                key={rule.id}
                entering={FadeIn.delay((index + communityRules.length) * 100)}
                style={styles.ruleCard}
              >
                <View style={[styles.iconContainer, { backgroundColor: theme.colors.secondaryLight }]}>
                  {rule.icon}
                </View>
                <View style={styles.ruleContent}>
                  <Text style={styles.ruleTitle}>{rule.title}</Text>
                  <Text style={styles.ruleDescription}>{rule.description}</Text>
                </View>
              </Animated.View>
            ))}
          </View>
        </Animated.View>
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
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
  },
  section: {
    marginBottom: theme.layout.isWeb ? theme.spacing.m : theme.spacing.l,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    ...(theme.layout.isWeb && {
      fontSize: 18,
    }),
  },
  ruleCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.layout.isWeb ? theme.borderRadius.s : theme.borderRadius.m,
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    marginBottom: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    ...(theme.layout.isWeb ? {
      border: '1px solid #f0f0f0',
    } : theme.shadows.small),
  },
  iconContainer: {
    width: theme.layout.isWeb ? 40 : 48,
    height: theme.layout.isWeb ? 40 : 48,
    borderRadius: theme.layout.isWeb ? 20 : 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
  },
  ruleContent: {
    flex: 1,
  },
  ruleTitle: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.xs,
  },
  ruleDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.layout.isWeb ? theme.spacing.m : theme.spacing.l,
  },
});