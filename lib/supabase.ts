import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

// Storage implementation for native platforms
const nativeStorageAdapter = {
  getItem: (key: string) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key: string, value: string) => {
    return SecureStore.setItemAsync(key, value);
  },
  removeItem: (key: string) => {
    return SecureStore.deleteItemAsync(key);
  },
};

// Storage implementation for web platform
const webStorageAdapter = Platform.OS === 'web' ? {
  getItem: (key: string) => {
    try {
      return Promise.resolve(window.localStorage.getItem(key));
    } catch (e) {
      return Promise.reject(e);
    }
  },
  setItem: (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  removeItem: (key: string) => {
    try {
      window.localStorage.removeItem(key);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
} : nativeStorageAdapter;

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: webStorageAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});