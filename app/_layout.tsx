import { useEffect } from 'react';
import { Stack, usePathname, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Analytics } from '@vercel/analytics/react';
import '../i18n';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { SplashScreen } from 'expo-router';
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { theme } from '@/constants/theme';
import Head from 'expo-router/head';

if (Platform.OS === 'web') {
  require('../styles/global.css');
}

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

function RedirectHandler() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (Platform.OS === 'web') {
      const hostname = window.location.hostname;
      const redirectPaths = ['/cibeles', '/jardinestropicales', '/aloha', '/oldtown'];

      // Check if we're on one of the specific domains and at a redirect path
      if (hostname.includes('ldguest.online') && redirectPaths.some(path => pathname.includes(path))) {
        router.replace('/');
      }
    }
  }, [pathname, router]);

  return null;
}

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    PlayfairDisplay_700Bold,
  });

  // Hide splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Return loading screen while fonts load
  if (!fontsLoaded && !fontError) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
          <meta name="description" content="L&D Guest Marbella - Premium vacation rentals in Marbella, Spain" />
          <meta name="theme-color" content="#E9B872" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
      )}
      <RedirectHandler />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="explore" options={{ headerShown: false }} />
        <Stack.Screen name="guide" options={{ headerShown: false }} />
        <Stack.Screen name="info" options={{ headerShown: false }} />
        <Stack.Screen name="contact" options={{ headerShown: false }} />

        <Stack.Screen name="property/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/location" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/entry" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/wifi" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/videos" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/rules" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/dining" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/attractions" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/luggage" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/car-rental" options={{ headerShown: false }} />
        <Stack.Screen name="property/[id]/parking" options={{ headerShown: false }} />

        <Stack.Screen name="cleaning" options={{ headerShown: false }} />
        <Stack.Screen name="sql-editor" options={{ headerShown: false }} />
        <Stack.Screen name="wifi-passwords" options={{ headerShown: false }} />

        <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
      </Stack>
      <StatusBar style="auto" />
      {Platform.OS === 'web' && <Analytics />}
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  }
});