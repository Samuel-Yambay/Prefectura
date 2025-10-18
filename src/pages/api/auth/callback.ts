import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  return Response.redirect(`${url.origin}/`, 302);
};
