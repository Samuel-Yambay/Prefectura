import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabaseClient';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return new Response("Email y password son obligatorios", { status: 400 });
  }

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect('/signin');
};

