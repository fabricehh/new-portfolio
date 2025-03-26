import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export const supabase = createClient("https://bwkwgkmueqkkanoskvvr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3a3dna211ZXFra2Fub3NrdnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0ODIwMjQsImV4cCI6MjA1NjA1ODAyNH0.O9H2Gcr5rKJ28t8wSDjIa3lPmWIZE68X0VfxO_Pxhuk");
