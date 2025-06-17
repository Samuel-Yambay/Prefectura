import { c as createComponent, a as createAstro, d as addAttribute, b as renderHead, e as renderSlot, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D-SP81hI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                    */
import { s as supabase } from '../chunks/supabaseClient_CFew0sUR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro + Supabase Auth</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("sb-access-token", { path: "/" });
      Astro2.cookies.delete("sb-refresh-token", { path: "/" });
      return Astro2.redirect("/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("sb-access-token", { path: "/" });
    Astro2.cookies.delete("sb-refresh-token", { path: "/" });
    return Astro2.redirect("/signin");
  }
  const email = session.data.user?.email;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="padding: 2rem; max-width: 960px; margin: 0 auto;"> <h1 style="font-size: 2rem; font-weight: bold; color: #333;">Bienvenido, ${email}</h1> <form action="/api/auth/signout" method="post" style="margin-bottom: 2rem;"> <button type="submit" style="
        padding: 0.75rem 1.5rem;
        background-color: #e63946;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;
      " onmouseover="this.style.backgroundColor='#d62828'" onmouseout="this.style.backgroundColor='#e63946'">
Cerrar sesión
</button> <button type="submit" style="
        padding: 0.75rem 1.5rem;
        background-color: #e63946;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;
      " onmouseover="this.style.backgroundColor='#d62828'" onmouseout="this.style.backgroundColor='#e63946'">
Ver Reporte
</button> </form> <section style="background: #f9f9f9; border-radius: 12px; padding: 2rem; box-shadow: 0 0 10px rgba(0,0,0,0.05);"> <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">Área de Registros</h2> <iframe src="https://docs.google.com/spreadsheets/d/10c2rUQnxlfuBsFyAj8kxuhkPUNFk6fPqnnQ2EWFCL5I/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847" width="100%" height="500" style="border: none; border-radius: 8px;" allowfullscreen>
        Cargando…
      </iframe> </section> </section> ` })}`;
}, "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/register.astro", void 0);

const $$file = "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Register,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
