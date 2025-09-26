import { redirect } from "@sveltejs/kit";
import type { Handle, HandleFetch } from "@sveltejs/kit"
import { svelteKitHandler } from "better-auth/svelte-kit";
import { auth } from "$lib/auth"
import { building } from "$app/environment";
import { API_URL } from "$env/static/private";

export const handle: Handle = async ({ event, resolve }) => {
  const session = await auth.api.getSession({
    headers: event.request.headers
  })

  if (session) {
    event.locals.session = session.session
    event.locals.user = session.user
    event.cookies.set("better-auth-user", event.locals.user.id, { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 * 7, secure: true, sameSite: 'none' })
  }

  if (!event.locals.user) {
    event.cookies.delete("better-auth-user", { path: "/" })

  }
  if (event.url.pathname === "/") {
    throw redirect(303, "/login")

  }
  if (!event.locals.user && event.url.pathname.startsWith("/dashboard")) {
    throw redirect(303, "/login")
  }
  return svelteKitHandler({ event, resolve, auth, building })
}


export const handleFetch: HandleFetch = async ({ event, request, fetch }) => {
  if (request.url.startsWith(API_URL)) {
    request.headers.set('cookie', event.request.headers.get('cookie'))
  }
  return fetch(request)
}
