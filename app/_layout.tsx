import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { SplashScreen } from 'expo-router';
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { theme } from '@/constants/theme';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

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
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="jardines-tropicales/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="aloha-pueblo/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="old-town/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="seaview-fontanilla/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="properties/jardines-tropicales" options={{ headerShown: false }} />
        <Stack.Screen name="properties/aloha-pueblo" options={{ headerShown: false }} />
        <Stack.Screen name="properties/old-town" options={{ headerShown: false }} />
        <Stack.Screen name="properties/seaview-fontanilla" options={{ headerShown: false }} />
        
        {/* Shared route files */}
        <Stack.Screen name="location" options={{ headerShown: false }} />
        <Stack.Screen name="entry" options={{ headerShown: false }} />
        <Stack.Screen name="wifi" options={{ headerShown: false }} />
        <Stack.Screen name="videos" options={{ headerShown: false }} />
        <Stack.Screen name="rules" options={{ headerShown: false }} />
        <Stack.Screen name="dining" options={{ headerShown: false }} />
        <Stack.Screen name="attractions" options={{ headerShown: false }} />
        <Stack.Screen name="luggage" options={{ headerShown: false }} />
        <Stack.Screen name="car-rental" options={{ headerShown: false }} />
        <Stack.Screen name="parking" options={{ headerShown: false }} />
        <Stack.Screen name="cleaning" options={{ headerShown: false }} />
        <Stack.Screen name="nearby-cities" options={{ headerShown: false }} />
        <Stack.Screen name="info" options={{ headerShown: false }} />
        <Stack.Screen name="sql-editor" options={{ headerShown: false }} />
        
        <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
      </Stack>
      <StatusBar style="auto" />
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