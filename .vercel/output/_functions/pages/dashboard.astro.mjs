import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_D-SP81hI.mjs';
import 'kleur/colors';
import 'clsx';
import { s as supabase } from '../chunks/supabaseClient_CFew0sUR.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
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
  session.data.user?.email;
  return renderTemplate`${maybeRenderHead()}<div class="header" data-astro-cid-3nssi2tu> <div class="left" data-astro-cid-3nssi2tu> <h2 data-astro-cid-3nssi2tu>Dashboard</h2> <a href="/dashboard" data-astro-cid-3nssi2tu>Actualizar</a> <a href="/reporte" data-astro-cid-3nssi2tu>Reporte</a> <a href="/sorteo" data-astro-cid-3nssi2tu>Actividades</a> </div> <div class="right" data-astro-cid-3nssi2tu> <form action="/api/auth/signout" method="post" data-astro-cid-3nssi2tu> <button type="submit" data-astro-cid-3nssi2tu>Salir</button> </form> </div> </div> <div class="report-container" data-astro-cid-3nssi2tu> <iframe src="https://docs.google.com/spreadsheets/d/10c2rUQnxlfuBsFyAj8kxuhkPUNFk6fPqnnQ2EWFCL5I/edit?usp=sharing?widget=false&headers=false&rm=minimal&single=true&embedded=true#gid=104705847" data-astro-cid-3nssi2tu></iframe> </div>`;
}, "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/dashboard.astro", void 0);

const $$file = "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
