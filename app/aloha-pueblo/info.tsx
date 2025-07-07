import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AlohaPuebloInfo() {
  const faqs = [
    {
      id: 1,
      question: "What time is check-in and check-out?",
      answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM."
    },
    {
      id: 2,
      question: "Is parking available?",
      answer: "Yes, free parking is available on-site."
    },
    {
      id: 3,
      question: "Are pets allowed?",
      answer: "Unfortunately, pets are not allowed at this property."
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {faqs.map((faq, index) => (
          <Animated.View 
            key={faq.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.faqItem}
          >
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </Animated.View>
        ))}

        <View style={styles.divider} />
        
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        
        {faqs.map((faq, index) => (
          <Animated.View 
            key={`faq-${faq.id}`}
            entering={FadeIn.delay(index * 100)}
            style={styles.faqItem}
          >
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  faqItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  answer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});