import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Phone, Mail, MessageCircle, TriangleAlert as AlertTriangle, UserRound, Heart, Clock, MessageSquare } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AlohaPuebloContactScreen() {
  const insets = useSafeAreaInsets();

  const whatsappNumber = '+34606767052';

  const handleWhatsApp = () => {
    Linking.openURL(`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`);
  };

  const emergencyNumbers = [
    { id: 'emergency', title: 'General Emergencies', number: '112' },
    { id: 'police', title: 'National Police', number: '091' },
    { id: 'police-marbella', title: 'National Police (Marbella)', number: '952 76 26 00' },
    { id: 'local-police', title: 'Local Police', number: '092' },
    { id: 'local-police-marbella', title: 'Local Police (Marbella)', number: '952 89 99 00' },
    { id: 'civil-guard', title: 'Civil Guard', number: '062' },
    { id: 'fire', title: 'Fire Department', number: '952 77 43 49' },
    { id: 'red-cross', title: 'Red Cross', number: '901 222 222' },
    { id: 'hospital', title: 'Costa del Sol Hospital', number: '951 97 66 69' },
    { id: 'civil-protection', title: 'Civil Protection', number: '952 77 51 95' },
    { id: 'airport', title: 'Malaga Airport', number: '952 04 84 04' },
    { id: 'post-office', title: 'Marbella Post Office', number: '952 81 08 87' },
    { id: 'traffic', title: 'Traffic (Marbella)', number: '952 77 25 49' },
    { id: 'train', title: 'RENFE (Train Service)', number: '919 19 05 04' },
    { id: 'taxi', title: 'Taxisol Marbella', number: '952 77 44 88' },
  ];

  const handleCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader 
        title="L&D Guest Marbella" 
        showBackButton={false}
        isHost={true}
      />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Animated.View 
          entering={FadeIn.duration(500)}
          style={styles.ldGuestCard}
        >
          <View style={styles.ldGuestHeader}>
            <Text style={styles.ldGuestTitle}>L&D Guest Marbella</Text>
            <Text style={styles.whatsappOnly}>WhatsApp Only</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.whatsappButton}
            onPress={handleWhatsApp}
            activeOpacity={0.8}
          >
            <MessageSquare size={20} color={theme.colors.white} />
            <Text style={styles.whatsappButtonText}>Message on WhatsApp</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Emergency Numbers</Text>
        
        {emergencyNumbers.map((contact, index) => (
          <Animated.View 
            key={contact.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.contactCard}
          >
            <View style={[styles.contactIconContainer, { 
              backgroundColor: contact.id === 'emergency' ? theme.colors.error :
                             contact.id.includes('police') ? theme.colors.primary :
                             contact.id === 'hospital' ? theme.colors.secondary :
                             theme.colors.accent
            }]}>
              {contact.id === 'emergency' ? <AlertTriangle size={24} color={theme.colors.white} /> :
               contact.id === 'hospital' ? <Heart size={24} color={theme.colors.white} /> :
               <Phone size={24} color={theme.colors.white} />}
            </View>
            
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>{contact.title}</Text>
              <Text style={styles.contactDetail}>{contact.number}</Text>
            </View>

            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => handleCall(contact.number.replace(/\s/g, ''))}
            >
              <Phone size={22} color={theme.colors.primary} />
            </TouchableOpacity>
          </Animated.View>
        ))}

        <Text style={styles.note}>
          In case of emergency, please don't hesitate to contact the appropriate service.
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
    padding: theme.spacing.m,
  },
  ldGuestCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
  ldGuestHeader: {
    marginBottom: theme.spacing.m,
  },
  ldGuestTitle: {
    ...theme.typography.subheading,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  whatsappOnly: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  whatsappButton: {
    flexDirection: 'row',
    backgroundColor: '#25D366', // WhatsApp green
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
  },
  whatsappButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.l,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  contactCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  contactIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.m,
  },
  contactInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  contactTitle: {
    ...theme.typography.bodyMedium,
    marginBottom: 2,
  },
  contactDetail: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  note: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    textAlign: 'center',
    marginTop: theme.spacing.m,
    fontStyle: 'italic',
  },
});