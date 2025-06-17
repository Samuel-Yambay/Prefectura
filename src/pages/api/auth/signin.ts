export const prerender = false;
import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabaseClient';
//console.log('📂 signin.ts cargado');

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  //console.log('POST /api/auth/signin received');
  const formData = await request.formData();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  
  //console.log('📥 Email:', email);
  //console.log('📥 Password:', password);

  if (!email || !password) {
    //console.log('❌ Falta email o password');
    return new Response('Email and password are required', { status: 400 });
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.session) {
    //console.log('❌ Error de login:', error?.message);
    return new Response(error?.message || 'Login failed', { status: 401 });
  }

  const { session } = data;

  cookies.set('sb-access-token', session.access_token, { path: '/', httpOnly: true, secure: true });
  cookies.set('sb-refresh-token', session.refresh_token, { path: '/', httpOnly: true, secure: true });
  //console.log('✅ Login exitoso. Redirigiendo a /dashboard');
  return redirect('/dashboard');
};
