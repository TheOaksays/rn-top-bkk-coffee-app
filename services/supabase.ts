// ไฟล์ที่ใช้ตั้งค่าการเชื่อมต่อไปยัง Supabase ซึ่งต้องใช้ URL และ KEY ของ Supabase

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gzjzmqzlxgooapslachg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6anptcXpseGdvb2Fwc2xhY2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzODU3MjcsImV4cCI6MjA5Mzk2MTcyN30.FIWXJ_2ohI1M3H8szboj9Wb1fVhlXs_M-Ch5HnuEgXU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
