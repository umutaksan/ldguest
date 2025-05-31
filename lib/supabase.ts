import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';

// Define a web-specific storage adapter using localStorage
const webStorageAdapter = {
  getItem: (key: string) => {
    try {
      return Promise.resolve(localStorage.getItem(key));
    } catch (e) {
      return Promise.reject(e);
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};

// Define the native storage adapter using SecureStore
const nativeStorageAdapter = Platform.select({
  native: {
    getItem: async (key: string) => {
      const SecureStore = await import('expo-secure-store');
      return SecureStore.getItemAsync(key);
    },
    setItem: async (key: string, value: string) => {
      const SecureStore = await import('expo-secure-store');
      return SecureStore.setItemAsync(key, value);
    },
    removeItem: async (key: string) => {
      const SecureStore = await import('expo-secure-store');
      return SecureStore.deleteItemAsync(key);
    },
  },
  default: webStorageAdapter,
});

// Choose the appropriate storage adapter based on platform
const storageAdapter = Platform.OS === 'web' ? webStorageAdapter : nativeStorageAdapter;

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: storageAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});