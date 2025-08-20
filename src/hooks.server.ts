import { auth } from "$lib/auth"
import { svelteKitHandler } from "better-auth/svelte-kit"
import { building } from "$app/environment"
import { redirect, type Handle } from "@sveltejs/kit"


export const handle: Handle = async ({ event, resolve }) => {
	const sessionRes = await auth.api.getSession({
		headers: event.request.headers
	})

	event.locals.session = sessionRes?.session || null
	event.locals.user = sessionRes?.user || null

	const session = event.locals.session

	if (event.url.pathname === '/' || event.url.pathname === "/login") {
		throw redirect(302, '/dashboard')
	}
	const isDashboardRoute = event.url.pathname.startsWith('/dashboard')

	// if (!session && isDashboardRoute) {
	// 	throw redirect(302, '/login')
	// }
	// console.log(session)

	return svelteKitHandler({ event, resolve, auth, building })
}
