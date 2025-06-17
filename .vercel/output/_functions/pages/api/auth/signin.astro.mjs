import { s as supabase } from '../../../chunks/supabaseClient_CFew0sUR.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.session) {
    return new Response(error?.message || "Login failed", { status: 401 });
  }
  const { session } = data;
  cookies.set("sb-access-token", session.access_token, { path: "/", httpOnly: true, secure: true });
  cookies.set("sb-refresh-token", session.refresh_token, { path: "/", httpOnly: true, secure: true });
  return redirect("/dashboard");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
