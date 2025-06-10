import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { Mail, Phone, MapPin, MessageSquare, Send, CircleCheck as CheckCircle, ArrowLeft } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function ContactScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = () => {
    // In a real app, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      id: 'email',
      icon: <Mail size={24} color={theme.colors.white} />,
      title: 'Email Us',
      value: 'support@travelapp.com',
      backgroundColor: theme.colors.primary
    },
    {
      id: 'phone',
      icon: <Phone size={24} color={theme.colors.white} />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      backgroundColor: theme.colors.secondary
    },
    {
      id: 'chat',
      icon: <MessageSquare size={24} color={theme.colors.white} />,
      title: 'Live Chat',
      value: 'Available 24/7',
      backgroundColor: theme.colors.accent
    },
    {
      id: 'office',
      icon: <MapPin size={24} color={theme.colors.white} />,
      title: 'Visit Us',
      value: '123 Travel Street, City',
      backgroundColor: theme.colors.success
    }
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.subtitle}>We're here to help with your travel needs</Text>
        </View>
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.contactCards}>
          {contactInfo.map((item, index) => (
            <Animated.View
              key={item.id}
              entering={FadeIn.delay(index * 100)}
              style={[styles.contactCard, { backgroundColor: item.backgroundColor }]}
            >
              <View style={styles.contactIconContainer}>
                {item.icon}
              </View>
              <Text style={styles.contactTitle}>{item.title}</Text>
              <Text style={styles.contactValue}>{item.value}</Text>
            </Animated.View>
          ))}
        </View>
        
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Send us a message</Text>
          
          {formSubmitted ? (
            <Animated.View 
              entering={FadeIn}
              style={styles.successMessage}
            >
              <CheckCircle size={24} color={theme.colors.success} />
              <Text style={styles.successText}>
                Thank you for your message! We'll get back to you soon.
              </Text>
            </Animated.View>
          ) : (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your name"
                  placeholderTextColor={theme.colors.textTertiary}
                  value={formData.name}
                  onChangeText={(text) => updateFormData('name', text)}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor={theme.colors.textTertiary}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={formData.email}
                  onChangeText={(text) => updateFormData('email', text)}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your phone number"
                  placeholderTextColor={theme.colors.textTertiary}
                  keyboardType="phone-pad"
                  value={formData.phone}
                  onChangeText={(text) => updateFormData('phone', text)}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Message</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="How can we help you?"
                  placeholderTextColor={theme.colors.textTertiary}
                  multiline
                  numberOfLines={Platform.OS === 'ios' ? 0 : 4}
                  textAlignVertical="top"
                  value={formData.message}
                  onChangeText={(text) => updateFormData('message', text)}
                />
              </View>
              
              <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Send Message</Text>
                <Send size={20} color={theme.colors.white} />
              </TouchableOpacity>
            </>
          )}
        </View>
        
        <View style={styles.officeHours}>
          <Text style={styles.officeHoursTitle}>Office Hours</Text>
          <Text style={styles.officeHoursText}>Monday - Friday: 9:00 AM - 6:00 PM</Text>
          <Text style={styles.officeHoursText}>Saturday: 10:00 AM - 4:00 PM</Text>
          <Text style={styles.officeHoursText}>Sunday: Closed</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.m,
  },
  backButton: {
    marginRight: theme.spacing.m,
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
  contactCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.l,
  },
  contactCard: {
    width: '48%',
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    alignItems: 'center',
    ...theme.shadows.small,
  },
  contactIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
  contactTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
    marginBottom: theme.spacing.xs,
  },
  contactValue: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    opacity: 0.9,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.l,
    ...theme.shadows.small,
  },
  formTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  inputContainer: {
    marginBottom: theme.spacing.m,
  },
  inputLabel: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.xs,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.typography.body,
    color: theme.colors.text,
  },
  textArea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.small,
  },
  submitButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginRight: theme.spacing.s,
  },
  successMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
  },
  successText: {
    ...theme.typography.body,
    color: theme.colors.success,
    marginLeft: theme.spacing.m,
    flex: 1,
  },
  officeHours: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
  officeHoursTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.s,
  },
  officeHoursText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
});