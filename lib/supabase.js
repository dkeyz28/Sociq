import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

import { createClient } from '@supabase/supabase-js'

import 'expo-sqlite/localStorage/install'
import { supabaseUrl, supabaseAnonKey } from '../src/constants'
const ExpoStorage = {
  getItem: (key) => {
    if (Platform.OS === 'web' && typeof window === 'undefined') return null;
    return AsyncStorage.getItem(key);
  },
  setItem: (key, value) => {
     if (Platform.OS === 'web' && typeof window === 'undefined') return;
    return AsyncStorage.setItem(key, value);
  },
  removeItem: (key) => {
     if (Platform.OS === 'web' && typeof window === 'undefined') return;
    return AsyncStorage.removeItem(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})