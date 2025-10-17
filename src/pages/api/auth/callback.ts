export const prerender = false;

export async function GET({ url }: any) {
  // Aquí podrías leer tokens si haces flujo server-side;
  // para este caso mínimo, solo vuelve a la Home.
  return Response.redirect(`${url.origin}/`, 302);
}
