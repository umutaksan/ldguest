import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, Stack } from 'expo-router';
import { theme } from '@/constants/theme';
import { Home, ArrowLeft } from 'lucide-react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found', headerShown: false }} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.errorCode}>404</Text>
          <Text style={styles.title}>Page Not Found</Text>
          <Text style={styles.message}>
            The page you're looking for doesn't exist or has been moved.
          </Text>
          
          <View style={styles.buttonsContainer}>
            <Link href="/" asChild>
              <TouchableOpacity style={styles.homeButton}>
                <Home size={20} color={theme.colors.white} />
                <Text style={styles.homeButtonText}>Go to Home</Text>
              </TouchableOpacity>
            </Link>
            
            <Link href=".." asChild>
              <TouchableOpacity style={styles.backButton}>
                <ArrowLeft size={20} color={theme.colors.text} />
                <Text style={styles.backButtonText}>Go Back</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.m,
  },
  content: {
    maxWidth: 400,
    alignItems: 'center',
  },
  errorCode: {
    ...theme.typography.heading,
    fontSize: 80,
    color: theme.colors.primary,
    marginBottom: theme.spacing.s,
  },
  title: {
    ...theme.typography.subheading,
    fontSize: 24,
    marginBottom: theme.spacing.m,
    textAlign: 'center',
  },
  message: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.xl,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  homeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing.m,
    ...theme.shadows.small,
  },
  homeButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  backButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.m,
    paddingVertical: theme.spacing.m,
    paddingHorizontal: theme.spacing.l,
    flexDirection: 'row',
    alignItems: 'center',
    ...theme.shadows.small,
  },
  backButtonText: {
    ...theme.typography.button,
    color: theme.colors.text,
    marginLeft: theme.spacing.s,
  },
});