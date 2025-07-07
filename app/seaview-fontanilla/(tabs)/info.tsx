import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Book, Wifi, Coffee, Bath, Thermometer, Wind, Tv, Leaf as Safe, Sofa, ChevronDown, ChevronUp, Moon, Users, Clock, Dog, CookingPot as Smoking, Heart, Bed, Music } from 'lucide-react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

export default function SeaviewInfoScreen() {
  const insets = useSafeAreaInsets();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
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
  
  const faqs = [
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
      answer: 'The apartment is 85 m².'
    },
    { 
      id: 14,
      question: 'What is the heating and cooling system like?', 
      answer: 'The apartment is equipped with air conditioning and ceiling fans. Heating is provided through the air conditioning system.'
    }
  ];
  
  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Property Information" showBackButton={false} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.sectionTitle}>House Rules</Text>
        
        {rules.map((rule, index) => (
          <Animated.View 
            key={rule.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.ruleCard}
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

        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        
        {faqs.map((faq, index) => (
          <Animated.View 
            key={faq.id}
            entering={FadeInDown.delay(index * 100)}
            style={styles.faqContainer}
          >
            <TouchableOpacity
              style={styles.faqQuestion}
              onPress={() => toggleFaq(faq.id)}
              activeOpacity={0.8}
            >
              <Text style={styles.faqQuestionText}>{faq.question}</Text>
              {expandedFaq === faq.id ? (
                <ChevronUp size={20} color={theme.colors.text} />
              ) : (
                <ChevronDown size={20} color={theme.colors.text} />
              )}
            </TouchableOpacity>
            
            {expandedFaq === faq.id && (
              <View style={styles.faqAnswer}>
                <Text style={styles.faqAnswerText}>{faq.answer}</Text>
              </View>
            )}
          </Animated.View>
        ))}
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
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.l,
  },
  ruleCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
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
    marginHorizontal: -theme.spacing.s,
  },
  amenityItem: {
    width: '33.33%',
    alignItems: 'center',
    padding: theme.spacing.s,
    marginBottom: theme.spacing.m,
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
});