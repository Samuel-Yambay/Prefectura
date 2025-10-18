import { createClient } from '@supabase/supabase-js';
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL;
  const SUPABASE_ANON = process.env.PUBLIC_SUPABASE_ANON_KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON) {
    console.error('Missing env: PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY');
    return new Response('Configure PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY in Vercel.', { status: 500 });
  }

  const provider = url.searchParams.get('provider') ?? 'google';
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider as any,
    options: { redirectTo: `${url.origin}/api/auth/callback` }
  });

  if (error) {
    console.error('Supabase OAuth error:', error);
    return new Response(error.message, { status: 500 });
  }

  return Response.redirect(data.url, 302);
};
