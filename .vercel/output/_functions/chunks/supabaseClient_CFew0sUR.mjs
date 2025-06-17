import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://ojdchphtsehygqsolyrc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZGNocGh0c2VoeWdxc29seXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0ODA2NzYsImV4cCI6MjA1NzA1NjY3Nn0.6BTE_o9L9uItr6VzxPWB3Lz1EmV9_Z_oGjCTbWELt9Q"
);

export { supabase as s };
