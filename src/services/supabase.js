import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ylvmupjmjldziralreiq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsdm11cGptamxkemlyYWxyZWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNTQzNTEsImV4cCI6MjA3ODYzMDM1MX0.bUm2eQFls4grShAMPQuw786F_AcksKWTVap1eXG9_t8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
