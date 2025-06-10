import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { ChevronDown, ChevronUp, Plane, CreditCard, Passport, Umbrella, Sun, Wifi, Smartphone, Pill, Globe, Languages } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function InfoScreen() {
  const insets = useSafeAreaInsets();
  const [expandedSection, setExpandedSection] = useState<string | null>('flights');
  
  const sections = [
    {
      id: 'flights',
      title: 'Flight Information',
      icon: <Plane size={24} color={theme.colors.primary} />,
      content: `• Check in online 24-48 hours before your flight
• Arrive at the airport at least 2 hours before domestic flights and 3 hours before international flights
• Keep your passport and boarding pass easily accessible
• Check baggage allowance before packing
• Consider travel insurance for flight cancellations or delays`
    },
    {
      id: 'payments',
      title: 'Payment & Currency',
      icon: <CreditCard size={24} color={theme.colors.primary} />,
      content: `• Notify your bank of travel plans to avoid card blocks
• Carry multiple payment methods (credit cards, debit cards, cash)
• Use ATMs at banks for better exchange rates
• Avoid currency exchange at airports when possible
• Consider a travel-specific credit card with no foreign transaction fees`
    },
    {
      id: 'documents',
      title: 'Travel Documents',
      icon: <Passport size={24} color={theme.colors.primary} />,
      content: `• Check passport validity (must be valid for at least 6 months beyond your trip)
• Research visa requirements for your destination
• Make digital and physical copies of important documents
• Register with your country's embassy when traveling to high-risk areas
• Keep emergency contact information readily available`
    },
    {
      id: 'weather',
      title: 'Weather Preparation',
      icon: <Umbrella size={24} color={theme.colors.primary} />,
      content: `• Check seasonal weather patterns before booking
• Pack appropriate clothing for your destination's climate
• Bring layers for variable conditions
• Consider waterproof gear for rainy destinations
• Check for extreme weather alerts before departure`
    },
    {
      id: 'health',
      title: 'Health & Safety',
      icon: <Pill size={24} color={theme.colors.primary} />,
      content: `• Research required vaccinations for your destination
• Pack a basic first aid kit and personal medications
• Check if your health insurance covers international travel
• Note the location of nearby hospitals or clinics
• Carry hand sanitizer and masks when traveling`
    },
    {
      id: 'connectivity',
      title: 'Staying Connected',
      icon: <Wifi size={24} color={theme.colors.primary} />,
      content: `• Research international data plans or local SIM options
• Download offline maps and translation apps
• Consider a portable WiFi device for multiple devices
• Save important contacts and addresses offline
• Bring appropriate power adapters for your destination`
    },
    {
      id: 'apps',
      title: 'Essential Travel Apps',
      icon: <Smartphone size={24} color={theme.colors.primary} />,
      content: `• Google Maps or Maps.me for navigation
• Google Translate or iTranslate for language barriers
• XE Currency for exchange rate calculations
• TripIt or Google Trips for itinerary organization
• Uber or local equivalents for transportation`
    },
    {
      id: 'etiquette',
      title: 'Cultural Etiquette',
      icon: <Globe size={24} color={theme.colors.primary} />,
      content: `• Research local customs and traditions before arrival
• Learn basic phrases in the local language
• Dress appropriately for cultural sites and religious venues
• Understand tipping practices at your destination
• Be mindful of photography restrictions at certain sites`
    },
    {
      id: 'language',
      title: 'Language Tips',
      icon: <Languages size={24} color={theme.colors.primary} />,
      content: `• Learn basic greetings and phrases in the local language
• Download an offline translation app
• Carry a pocket phrasebook for quick reference
• Practice pronunciation of essential phrases
• Consider a translation device for longer conversations`
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Travel Information</Text>
        <Text style={styles.subtitle}>Essential tips for your journey</Text>
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {sections.map((section, index) => (
          <Animated.View
            key={section.id}
            entering={FadeIn.delay(index * 50)}
            style={styles.sectionContainer}
          >
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => toggleSection(section.id)}
              activeOpacity={0.7}
            >
              <View style={styles.sectionTitleContainer}>
                <View style={styles.iconContainer}>
                  {section.icon}
                </View>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              {expandedSection === section.id ? (
                <ChevronUp size={24} color={theme.colors.text} />
              ) : (
                <ChevronDown size={24} color={theme.colors.text} />
              )}
            </TouchableOpacity>
            
            {expandedSection === section.id && (
              <View style={styles.sectionContent}>
                <Text style={styles.sectionText}>{section.content}</Text>
              </View>
            )}
          </Animated.View>
        ))}
        
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            Information provided is for general guidance only. Always check official sources for the most up-to-date travel requirements and recommendations.
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
  header: {
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.m,
    paddingBottom: theme.spacing.s,
  },
  title: {
    ...theme.typography.heading,
    color: theme.colors.text,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  content: {
    padding: theme.spacing.m,
    paddingBottom: theme.spacing.xl * 2,
  },
  sectionContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.m,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.m,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.m,
  },
  sectionTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
  },
  sectionContent: {
    padding: theme.spacing.m,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  sectionText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
  disclaimer: {
    marginTop: theme.spacing.m,
    padding: theme.spacing.m,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
  },
  disclaimerText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});