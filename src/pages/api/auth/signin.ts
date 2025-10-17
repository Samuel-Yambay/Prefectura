export const prerender = false;

import { createClient } from '@supabase/supabase-js';

export async function GET({ url }: any) {
  const supabase = createClient(
    process.env.PUBLIC_SUPABASE_URL!,
    process.env.PUBLIC_SUPABASE_ANON_KEY!
  );

  const provider = url.searchParams.get('provider') ?? 'google';

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${url.origin}/api/auth/callback` }
  });

  if (error) return new Response(error.message, { status: 500 });
  return Response.redirect(data.url, 302);
}
