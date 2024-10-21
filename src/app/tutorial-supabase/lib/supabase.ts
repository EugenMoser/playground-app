import {
  supabaseAnonKey,
  supabaseURL,
} from '@/app/tutorial-supabase/config';
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database

export const supabase = createClient(supabaseURL, supabaseAnonKey);
