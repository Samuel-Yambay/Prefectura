// src/pages/api/auth/whoami.ts
import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ cookies }) => {
  const access = cookies.get("sb-access-token");
  const refresh = cookies.get("sb-refresh-token");
  const ok = Boolean(access && refresh);
  return new Response(JSON.stringify({ ok }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
