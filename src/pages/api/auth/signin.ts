import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabaseClient';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = String(form.get('email') ?? '');
  const password = String(form.get('password') ?? '');
  const next = new URL(request.url).searchParams.get('next') || '/';

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.session) return redirect('/signin');

  const isSecure = request.url.startsWith('https://');

  cookies.set('sb-access-token', data.session.access_token, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: isSecure,
  });
  cookies.set('sb-refresh-token', data.session.refresh_token, {
    path: '/',
    httpOnly: true,
    sameSite: 'lax',
    secure: isSecure,
  });

  return redirect(next);
};
