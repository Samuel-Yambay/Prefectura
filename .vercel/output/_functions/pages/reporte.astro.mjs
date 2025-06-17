import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_D-SP81hI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Reporte = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header" data-astro-cid-wrl3xr6m> <div class="left" data-astro-cid-wrl3xr6m> <h2 data-astro-cid-wrl3xr6m>Reporte</h2> <a href="/reporte" data-astro-cid-wrl3xr6m>Actualizar</a> <a href="/dashboard" data-astro-cid-wrl3xr6m>Dashboard</a> <a href="/sorteo" data-astro-cid-wrl3xr6m>Actividades</a> </div> <div class="right" data-astro-cid-wrl3xr6m> <form action="/api/auth/signout" method="post" data-astro-cid-wrl3xr6m> <button type="submit" data-astro-cid-wrl3xr6m>Salir</button> </form> </div> </div> <div class="report-container" data-astro-cid-wrl3xr6m> <iframe src="https://lookerstudio.google.com/embed/reporting/7836d3d7-391a-4a25-8550-8bca2eeb7aeb/page/p_sbxoo4mbfd" allowfullscreen data-astro-cid-wrl3xr6m></iframe> </div>`;
}, "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/reporte.astro", void 0);

const $$file = "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/reporte.astro";
const $$url = "/reporte";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reporte,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
