// สำหรับตรวจสอบ environment variables บน production
// วางไว้ในหน้า admin หรือ API route เพื่อ debug

export async function GET() {
  const env = {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'SET' : 'MISSING',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'SET' : 'MISSING',
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'SET' : 'MISSING',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY ? 'SET' : 'MISSING',
  };

  return Response.json({
    timestamp: new Date().toISOString(),
    environment: env,
    node_env: process.env.NODE_ENV,
  });
}
