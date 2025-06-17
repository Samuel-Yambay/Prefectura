import { c as createComponent, a as createAstro, b as renderHead, r as renderTemplate } from '../chunks/astro/server_D-SP81hI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`<html lang="es" data-astro-cid-cj4bt2fj> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Inicio de Sesión | Prefectura de Chimborazo</title>${renderHead()}</head> <body data-astro-cid-cj4bt2fj> <div class="form-container" data-astro-cid-cj4bt2fj> <h1 data-astro-cid-cj4bt2fj>Iniciar Sesión</h1> <form action="/api/auth/signin" method="post" data-astro-cid-cj4bt2fj> <label for="email" data-astro-cid-cj4bt2fj>Correo Electrónico</label> <input type="email" name="email" id="email" required data-astro-cid-cj4bt2fj> <label for="password" data-astro-cid-cj4bt2fj>Contraseña</label> <input type="password" name="password" id="password" required data-astro-cid-cj4bt2fj> <button type="submit" data-astro-cid-cj4bt2fj>Iniciar sesión</button> <div class="link-inicio" data-astro-cid-cj4bt2fj> <a href="/" data-astro-cid-cj4bt2fj>Ir a Página de Inicio</a> </div> </form> </div> </body></html>`;
}, "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/signin.astro", void 0);

const $$file = "E:/JS/HGADPCH_ASTRO/sis_HGADPCH/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
