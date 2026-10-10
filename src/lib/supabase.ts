import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://bfuzcdbdwafvhaeykxfc.supabase.co";

const supabaseAnonKey =
  "sb_publishable_VAv98msbU0vKloY02Yw2XQ_BXxQSRyo";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
