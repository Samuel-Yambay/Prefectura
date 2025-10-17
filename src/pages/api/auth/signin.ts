import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabaseClient";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const url  = new URL(request.url);
  const next = url.searchParams.get("next") || "/";

  const form = await request.formData();
  const email = String(form.get("email") || "");
  const password = String(form.get("password") || "");

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.session) return redirect("/signin");

  cookies.set("sb-access-token", data.session.access_token, { path:"/", httpOnly:true, sameSite:"lax", secure:false });
  cookies.set("sb-refresh-token", data.session.refresh_token, { path:"/", httpOnly:true, sameSite:"lax", secure:false });

  // SIEMPRE vuelve al index (o a lo que diga next)
  return redirect(next);
};
