import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

// Only use SecureStore adapter for native platforms
const authStorage = Platform.OS !== 'web' 
  ? {
      storage: {
        getItem: (key: string) => {
          return SecureStore.getItemAsync(key);
        },
        setItem: (key: string, value: string) => {
          return SecureStore.setItemAsync(key, value);
        },
        removeItem: (key: string) => {
          return SecureStore.deleteItemAsync(key);
        },
      }
    }
  : {};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    ...authStorage
  },
});