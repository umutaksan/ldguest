import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Video, Key } from 'lucide-react-native';
import { theme } from '@/constants/theme';

export default function JardinesTropicalesEntry() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entry Instructions</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Door Access</Text>
        <TouchableOpacity 
          style={styles.watchVideoButton}
          onPress={() => Linking.openURL('https://youtube.com/shorts/nWXkqDrRcyU')}
          activeOpacity={0.8}
        >
          <Video size={20} color={theme.colors.white} />
          <Text style={styles.watchVideoText}>Watch How to Open Doors</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Pickup</Text>
        <TouchableOpacity 
          style={styles.watchVideoButton}
          onPress={() => Linking.openURL('https://youtube.com/shorts/XNzqKrwDKf8')}
          activeOpacity={0.8}
        >
          <Key size={20} color={theme.colors.white} />
          <Text style={styles.watchVideoText}>Watch Key Pickup Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 10,
  },
  watchVideoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  watchVideoText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});