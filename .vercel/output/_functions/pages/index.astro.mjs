import { c as createComponent, a as createAstro, b as renderHead, r as renderTemplate } from '../chunks/astro/server_D-SP81hI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!--h1>Iniciar sesión1</h1>
<form id="login-form">
  <input id="email" type="email" placeholder="Email" required />
  <input id="password" type="password" placeholder="Contraseña" required />
  <button type="submit">Entrar</button>
  <p id="error" style="color: red;"></p>
</form--><html lang="es" data-astro-cid-j7pv25f6> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Inicio | Chimborazo GAD</title>${renderHead()}</head> <body data-astro-cid-j7pv25f6> <div class="overlay" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Bienvenido al GAD Provincial Chimborazo</h1> <div class="btn-group" data-astro-cid-j7pv25f6> <a href="/signin" class="btn" data-astro-cid-j7pv25f6>Iniciar Sesión</a> <!--a href="/reporte" class="btn">Reporte</a--> <a href="https://drive.google.com/drive/folders/1pCdLpMYkc0LuTLon9OdR9sefd0s9sJjd?usp=sharing" target="_blank" class="btn" data-astro-cid-j7pv25f6> Ver Reporte</a> </div> </div> </body></html>`;
}, "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/index.astro", void 0);
const $$file = "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
