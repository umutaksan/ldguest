import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Book, Wifi, Coffee, Bath, Thermometer, Wind, Tv, Leaf as Safe, Sofa, ChevronDown, ChevronUp, Moon, Users, Clock, Dog, CookingPot as Smoking, Heart, Bed, Music, Utensils } from 'lucide-react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

export default function InfoScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { width } = useWindowDimensions();
  
  // Get amenities based on property ID
  const getAmenities = () => {
    switch(id) {
      case '29051504': // Old Town
        return [
          { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
          { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
          { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
          { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
          { id: 5, title: '2 Ceiling fans', icon: <Wind size={24} color={theme.colors.primary} /> },
          { id: 6, title: '3 Smart TVs', icon: <Tv size={24} color={theme.colors.primary} /> },
          { id: 7, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
          { id: 8, title: '2 Sofa beds', icon: <Sofa size={24} color={theme.colors.primary} /> },
        ];
      case '29051503': // Aloha Pueblo
        return [
          { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
          { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
          { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
          { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
          { id: 5, title: '1 Smart TV', icon: <Tv size={24} color={theme.colors.primary} /> },
          { id: 6, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
          { id: 7, title: '2 Sofa beds', icon: <Sofa size={24} color={theme.colors.primary} /> },
          { id: 8, title: 'Fully equipped small appliances', icon: <Utensils size={24} color={theme.colors.primary} /> },
        ];
      case '29051502': // Seaview Fontanilla
        return [
          { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
          { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
          { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
          { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
          { id: 5, title: '2 Smart TVs', icon: <Tv size={24} color={theme.colors.primary} /> },
          { id: 6, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
          { id: 7, title: '1 Sofa bed', icon: <Sofa size={24} color={theme.colors.primary} /> },
          { id: 8, title: 'Fully equipped small appliances', icon: <Utensils size={24} color={theme.colors.primary} /> },
        ];
      default: // Jardines Tropicales
        return [
          { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
          { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
          { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
  const rules = [
    { 
      id: 1, 
      title: 'Quiet Hours', 
      description: 'Quiet hours are from 11:00 PM to 8:00 AM. Please avoid making noise during these hours.',
      icon: <Moon size={24} color={theme.colors.secondary} />
    },
    { 
      id: 2, 
      title: 'Common Areas', 
      description: 'When using the pool, garden, or other shared spaces, please keep them clean and tidy. Be considerate of others in the community.',
      icon: <Users size={24} color={theme.colors.secondary} />
    },
    { 
      id: 3, 
      title: 'Check-In and Check-Out Times', 
      description: '• Check-in: After 3:00 PM\n• Check-out: Before 10:00 AM',
      icon: <Clock size={24} color={theme.colors.secondary} />
    },
    { 
      id: 4, 
      title: 'Pets', 
      description: 'You are welcome to bring your pets, but please inform us in advance.',
      icon: <Dog size={24} color={theme.colors.secondary} />
    },
    { 
      id: 5, 
      title: 'Smoking', 
      description: 'Smoking is not allowed inside the house. You may smoke on the balcony or in outdoor areas.',
      icon: <Smoking size={24} color={theme.colors.secondary} />
    },
    { 
      id: 6, 
      title: 'Handle With Care', 
      description: 'Please treat the house with care and respect. If any damage occurs or issues arise, let us know as soon as possible.',
      icon: <Heart size={24} color={theme.colors.secondary} />
    },
    { 
      id: 7, 
      title: 'Towels and Linens', 
      description: 'Provided towels are for indoor use only. Please bring your own towels for the beach.',
      icon: <Bed size={24} color={theme.colors.secondary} />
    },
    { 
      id: 8, 
      title: 'Parties and Events', 
      description: 'Hosting parties or large events is not allowed.',
      icon: <Music size={24} color={theme.colors.secondary} />
    }
  ];
  
  // Get FAQs based on property ID
  const getFaqs = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales - Modern Apartment (1+1)
        return [
          { 
            id: 1, 
            question: 'Does the apartment have a balcony?', 
            answer: 'No, this apartment does not have a balcony.'
          },
          { 
            id: 2, 
            question: 'Is there a pool?', 
            answer: 'Yes, the building has a swimming pool for residents.'
          },
          { 
            id: 3, 
            question: 'Are pets allowed?', 
            answer: 'Yes, pets are allowed. Please inform us in advance.'
          },
          { 
            id: 4, 
            question: 'Is check-in and check-out flexible?', 
            answer: 'Check-in is flexible after 3:00 PM. Check-out is strict and must be completed by 10:00 AM.'
          },
          { 
            id: 5, 
            question: 'How many people can stay in the apartment?', 
            answer: 'The apartment can accommodate up to 3 people. Sleeping arrangements:\n• 1 bedroom with a double bed\n• 1 sofa bed in the living room'
          },
          { 
            id: 6, 
            question: 'Is there a discount for long-term stays?', 
            answer: 'Yes, discounts are available for long-term stays.'
          },
          { 
            id: 7, 
            question: 'Is the area safe at night?', 
            answer: 'Yes, the area is very safe, even late at night.'
          },
          { 
            id: 8, 
            question: 'How far is public transport?', 
            answer: 'Public transport is within walking distance.'
          },
          { 
            id: 9, 
            question: 'How can I get to the apartment from the airport?', 
            answer: 'You can take a bus, Uber, or taxi to get to the apartment.'
          },
          { 
            id: 10, 
            question: 'Are laundry and cleaning supplies provided?', 
            answer: 'Yes, the apartment comes with all necessary laundry and cleaning supplies.'
          },
          { 
            id: 11, 
            question: 'What is the size of the apartment?', 
            answer: 'The apartment is 45 m².'
          },
          { 
            id: 12, 
            question: 'What is the heating and cooling system like?', 
            answer: 'The apartment is equipped with air conditioning and ceiling fans. Heating is provided through the air conditioning system.'
          }
        ];
      case '29051502': // Seaview Fontanilla - Beachfront Apartment (2+1)
        return [
          { 
            id: 1, 
            question: 'How close is the apartment to the beach?',
            answer: 'The apartment is beachfront, with the beach right outside the door.'
          },
          { 
            id: 2, 
            question: 'Is parking available?', 
            answer: 'While there is no private parking, there are public parking areas nearby.'
          },
          { 
            id: 3, 
            question: 'Does the apartment have a balcony?', 
            answer: 'Yes, the apartment has one balcony, perfect for relaxing and enjoying the view.'
          },
          { 
            id: 4, 
            question: 'Are pets allowed?', 
            answer: 'Yes, pets are allowed. Please notify us in advance.'
          },
          { 
            id: 5, 
            question: 'Is check-in and check-out flexible?', 
            answer: 'Check-in is flexible after 3:00 PM. Check-out is strict and must be completed by 10:00 AM.'
          },
          { 
            id: 6, 
            question: 'Is there a pool?', 
            answer: 'Yes, the building has a swimming pool available for residents.'
          },
          { 
            id: 7, 
            question: 'How many people can stay in the apartment?', 
            answer: 'The apartment can accommodate up to 4 people. Sleeping arrangements:\n• 1 bedroom with a double bed\n• 1 room with a bunk bed for 2 people\n• 1 sofa bed in the living room'
          },
          { 
            id: 8, 
            question: 'Is there a discount for long-term stays?', 
            answer: 'Yes, we offer special discounts for long-term stays.'
          },
          { 
            id: 9, 
            question: 'Is the area safe at night?', 
            answer: 'Yes, the area is very safe, even at night.'
          },
          { 
            id: 10, 
            question: 'How far is public transport?', 
            answer: 'Public transport is within walking distance.'
          },
          { 
            id: 11, 
            question: 'How can I get to the apartment from the airport?', 
            answer: 'You can take a bus, Uber, or taxi to get to the apartment.'
          },
          { 
            id: 12, 
            question: 'Are laundry and cleaning supplies provided?', 
            answer: 'Yes, all necessary laundry and cleaning supplies are available in the apartment.'
          },
          { 
            id: 13, 
            question: 'What is the size of the apartment?', 
            answer: 'The apartment is 105 m².'
          },
          { 
            id: 14, 
            question: 'What is the heating and cooling system like?', 
            answer: 'The apartment is equipped with air conditioning and ceiling fans. Heating is provided through the air conditioning system.'
          }
        ];
      case '29051503': // Aloha Pueblo (1+1)
        return [
          { 
            id: 1, 
            question: 'Does the apartment have a balcony?',
            answer: 'The building has a balcony, a garden, and a terrace.'
          },
          { 
            id: 2, 
            question: 'Is there a pool?', 
            answer: 'Yes, the building has a swimming pool for residents.'
          },
          { 
            id: 3, 
            question: 'Are pets allowed?', 
            answer: 'No, pets aren\'t allowed.'
          },
          { 
            id: 4, 
            question: 'Is check-in and check-out flexible?', 
            answer: 'Check-in is flexible after 3:00 PM. Check-out is strict and must be completed by 10:00 AM.'
          },
          { 
            id: 5, 
            question: 'How many people can stay in the apartment?', 
            answer: 'The apartment can accommodate up to 4 people. Sleeping arrangements:\n• 1 bedroom with a double bed\n• 1 sofa bed in the living room'
          },
          { 
            id: 6, 
            question: 'Is there a discount for long-term stays?', 
            answer: 'Yes, discounts are available for long-term stays.'
          },
          { 
            id: 7, 
            question: 'Is the area safe at night?', 
            answer: 'Yes, the area is very safe, even late at night.'
          },
          { 
            id: 8, 
            question: 'How far is public transport?', 
            answer: 'Public transport is within walking distance.'
          },
          { 
            id: 9, 
            question: 'How can I get to the apartment from the airport?', 
            answer: 'You can take a bus, Uber, or taxi to get to the apartment.'
          },
          { 
            id: 10, 
            question: 'Are laundry and cleaning supplies provided?', 
            answer: 'Yes, the apartment comes with all necessary laundry and cleaning supplies.'
          },
          { 
            id: 11, 
            question: 'What is the size of the apartment?', 
            answer: 'The apartment is 120 m².'
          },
          { 
            id: 12, 
            question: 'What is the heating and cooling system like?', 
            answer: 'The apartment is equipped with air conditioning and ceiling fans. Heating is provided through the air conditioning system.'
          }
        ];
      case '29051504': // Old Town - Central Apartment (3+1)
        return [
          { 
            id: 1, 
            question: 'Does the apartment have balconies?',
            answer: 'Yes, the apartment has three balconies with charming city views.'
          },
          { 
            id: 2, 
            question: 'Are pets allowed?',
            answer: 'Yes, pets are welcome. Please let us know in advance.'
          },
          { 
            id: 3, 
            question: 'Is check-in and check-out flexible?', 
            answer: 'Check-in is flexible after 3:00 PM. Check-out is strict and must be completed by 10:00 AM.'
          },
          { 
            id: 4, 
            question: 'How many people can stay in the apartment?', 
            answer: 'The apartment can host up to 6 people. Sleeping arrangements:\n• 3 bedrooms with double beds\n• 2 sofa beds in the living room'
          },
          { 
            id: 5, 
            question: 'Is there a discount for long-term stays?', 
            answer: 'Yes, we provide discounts for extended stays.'
          },
          { 
            id: 6, 
            question: 'Is the area safe at night?', 
            answer: 'Yes, the area is very safe, even at night.'
          },
          { 
            id: 7, 
            question: 'How far is public transport?', 
            answer: 'Public transport is within walking distance.'
          },
          { 
            id: 8, 
            question: 'How can I get to the apartment from the airport?', 
            answer: 'You can take a bus, Uber, or taxi to get to the apartment.'
          },
          { 
            id: 9, 
            question: 'Are laundry and cleaning supplies provided?',
            answer: 'Yes, laundry and cleaning supplies are provided in the apartment.'
          },
          { 
            id: 10, 
            question: 'Is there a pool?',
            answer: 'No, this apartment does not have a pool.'
          },
          { 
            id: 11, 
            question: 'What is the size of the apartment?',
            answer: 'The apartment is 105 m².'
          },
          { 
            id: 12, 
            question: 'What is the heating and cooling system like?', 
            answer: 'The apartment is equipped with air conditioning and ceiling fans. Heating is provided through the air conditioning system.'
          }
        ];
      default:
        return [
          { 
            id: 1, 
            question: 'Does the apartment have a balcony?', 
            answer: 'No, this apartment does not have a balcony.'
          },
          { 
            id: 2, 
            question: 'Is there a pool?', 
            answer: 'Yes, the building has a swimming pool for residents.'
          }
        ];
    }
  };
  
  const faqs = getFaqs();
  
  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // Determine if we're on a large screen
  const isLargeScreen = width > 1024;
  const isMediumScreen = width > 768 && width <= 1024;
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Property Information" showBackButton={false} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          isLargeScreen && styles.contentLarge
        ]}
      >
        <View style={[
          styles.mainContent,
          isLargeScreen && styles.mainContentLarge
        ]}>
          <View style={[
            styles.rulesSection,
            isLargeScreen && styles.rulesSectionLarge
          ]}>
            <Text style={[
              styles.sectionTitle,
              isLargeScreen && styles.sectionTitleLarge
            ]}>House Rules</Text>
            
            <View style={[
              styles.rulesGrid,
              isLargeScreen && styles.rulesGridLarge,
              isMediumScreen && styles.rulesGridMedium
            ]}>
              {rules.map((rule, index) => (
                <Animated.View 
                  key={rule.id}
                  entering={FadeIn.delay(index * 100)}
                  style={[
                    styles.ruleCard,
                    isLargeScreen && styles.ruleCardLarge,
                    isMediumScreen && styles.ruleCardMedium
                  ]}
                >
                  <View style={styles.ruleIconContainer}>
                    {rule.icon}
                  </View>
                  <View style={styles.ruleContent}>
                    <Text style={styles.ruleTitle}>{rule.title}</Text>
                    <Text style={styles.ruleDescription}>{rule.description}</Text>
                  </View>
                </Animated.View>
              ))}
            </View>
          </View>

          <View style={[
            styles.amenitiesSection,
            isLargeScreen && styles.amenitiesSectionLarge
          ]}>
            <Text style={[
              styles.sectionTitle,
              isLargeScreen && styles.sectionTitleLarge
            ]}>Amenities</Text>
            
            <View style={[
              styles.amenitiesContainer,
              isLargeScreen && styles.amenitiesContainerLarge,
              isMediumScreen && styles.amenitiesContainerMedium
            ]}>
              {amenities.map((amenity, index) => (
                <Animated.View 
                  key={amenity.id}
                  entering={FadeIn.delay(index * 100)}
                  style={[
                    styles.amenityItem,
                    isLargeScreen && styles.amenityItemLarge,
                    isMediumScreen && styles.amenityItemMedium
                  ]}
                >
                  <View style={styles.amenityIcon}>
                    {amenity.icon}
                  </View>
                  <Text style={styles.amenityTitle}>{amenity.title}</Text>
                </Animated.View>
              ))}
            </View>
          </View>
        </View>
        
        <View style={styles.divider} />
        
        <Text style={[
          styles.sectionTitle,
          isLargeScreen && styles.sectionTitleLarge
        ]}>Frequently Asked Questions</Text>
        
        <View style={[
          styles.faqContainer,
          isLargeScreen && styles.faqContainerLarge
        ]}>
          {faqs.map((faq, index) => (
            <Animated.View 
              key={faq.id}
              entering={FadeInDown.delay(index * 100)}
              style={styles.faqItem}
            >
              <TouchableOpacity
                style={styles.faqQuestion}
                onPress={() => toggleFaq(faq.id)}
                activeOpacity={0.8}
              >
                <Text style={[
                  styles.faqQuestionText,
                  isLargeScreen && styles.faqQuestionTextLarge
                ]}>{faq.question}</Text>
                {expandedFaq === faq.id ? (
                  <ChevronUp size={20} color={theme.colors.text} />
                ) : (
                  <ChevronDown size={20} color={theme.colors.text} />
                )}
              </TouchableOpacity>
              
              {expandedFaq === faq.id && (
                <View style={styles.faqAnswer}>
                  <Text style={[
                    styles.faqAnswerText,
                    isLargeScreen && styles.faqAnswerTextLarge
                  ]}>{faq.answer}</Text>
                </View>
              )}
            </Animated.View>
          ))}
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
    padding: theme.spacing.m,
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
  },
  rulesSection: {
    width: '100%',
  },
  rulesSectionLarge: {
    width: '60%',
    paddingRight: theme.spacing.l,
  },
  amenitiesSection: {
    width: '100%',
  },
  amenitiesSectionLarge: {
    width: '35%',
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  sectionTitleLarge: {
    fontSize: 24,
    marginBottom: theme.spacing.l,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.l,
  },
  rulesGrid: {
    flexDirection: 'column',
  },
  rulesGridLarge: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rulesGridMedium: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ruleCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
    width: '100%',
  },
  ruleCardLarge: {
    width: '48%',
  },
  ruleCardMedium: {
    width: '48%',
  },
  ruleIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.m,
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
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenitiesContainerLarge: {
    flexDirection: 'column',
  },
  amenitiesContainerMedium: {
    justifyContent: 'space-between',
  },
  amenityItem: {
    width: '33.33%',
    alignItems: 'center',
    padding: theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
  amenityItemLarge: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
  amenityItemMedium: {
    width: '25%',
  },
  amenityIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
  amenityTitle: {
    ...theme.typography.bodySmall,
    textAlign: 'center',
    color: theme.colors.text,
  },
  faqContainer: {
    width: '100%',
  },
  faqContainerLarge: {
    maxWidth: 800,
    alignSelf: 'center',
  },
  faqItem: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    marginBottom: theme.spacing.m,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  faqQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.m,
  },
  faqQuestionText: {
    ...theme.typography.bodyMedium,
    flex: 1,
    marginRight: theme.spacing.s,
  },
  faqQuestionTextLarge: {
    fontSize: 18,
  },
  faqAnswer: {
    padding: theme.spacing.m,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  faqAnswerText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  faqAnswerTextLarge: {
    fontSize: 16,
  },
});