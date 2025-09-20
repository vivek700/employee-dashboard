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
    event.cookies.set("better-auth-user", event.locals.user.id, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 * 7, secure: true })
  }

  if (!event.locals.user) {
    event.cookies.delete("better-auth-user", { path: "/" })

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
