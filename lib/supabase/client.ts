import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './database.types';

let supabaseClient: ReturnType<typeof createClientComponentClient<Database>> | null = null;

export function createClient() {
  if (!supabaseClient) {
    // Create client with browser-compatible options
    const options: any = {
      // Completely disable realtime features on the client side
      realtime: {
        autoconnect: false, // Never auto-connect
      },
    };
    
    supabaseClient = createClientComponentClient<Database>(options);
  }
  return supabaseClient;
} 