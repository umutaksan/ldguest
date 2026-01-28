import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { theme } from '@/constants/theme';
import { WebHeader } from '@/components/common/WebHeader';
import { MessageSquare, Phone } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ContactScreen() {
  const whatsappNumber = '+34606767052';

  const handleWhatsApp = () => {
    Linking.openURL(`https://wa.me/${whatsappNumber.replace(/\+/g, '')}`);
  };

  const handleCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <WebHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.mainContent}>
          <Text style={styles.sectionTitle}>Contact Us</Text>

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

          <Text style={styles.sectionSubtitle}>Emergency Numbers</Text>
          <Text style={styles.note}>
            In case of emergency, please don't hesitate to contact the appropriate service.
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
    marginBottom: theme.spacing.l,
  },
  sectionSubtitle: {
    ...theme.typography.subheading,
    fontSize: 24,
    marginBottom: theme.spacing.m,
  },
  ldGuestCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.l,
    padding: theme.spacing.xl,
    ...theme.shadows.medium,
    maxWidth: 500,
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
    backgroundColor: '#25D366',
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.l,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.small,
  },
  whatsappButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.xl,
  },
  note: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    fontStyle: 'italic',
  },
});
