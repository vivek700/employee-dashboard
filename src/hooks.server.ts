import { redirect, type Handle } from "@sveltejs/kit";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { auth } from "$lib/auth"
import { building } from "$app/environment";

export const handle: Handle = async ({ event, resolve }) => {

  const session = await auth.api.getSession({
    headers: event.request.headers
  })
  if (session) {
    event.locals.session = session.session
    event.locals.user = session.user
  }
  if (event.url.pathname === "/") {
    throw redirect(303, "/dashboard")

  }
  if (event.locals.user && event.url.pathname.startsWith("/login")) {
    throw redirect(303, "/dashboard")

  }
  if (!event.locals.user && event.url.pathname.startsWith("/dashboard")) {
    throw redirect(303, "/login")
  }
  return svelteKitHandler({ event, resolve, auth, building })
}
