import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === "/" || event.url.pathname === "/login") {
		throw redirect(302, '/dashboard')
	}
	const response = await resolve(event)
	return response
}
