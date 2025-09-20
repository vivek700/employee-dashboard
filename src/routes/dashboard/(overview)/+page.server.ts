import type { Actions, PageServerLoad } from './$types'
import { fetchDepartments, fetchEmployees, resetData } from '$lib/data'
import { auth } from '$lib/auth'
import { redirect } from '@sveltejs/kit'

export const load: PageServerLoad = async ({ fetch, locals }) => {
  const res = await fetch("http://localhost:3000/auth/handshake", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(locals.user)


  })

  return {
    employees: fetchEmployees(fetch),
    departments: fetchDepartments(fetch)
  }
}

export const actions = {
  reset: async ({ fetch }) => {
    await resetData(fetch)
  },
  signOut: async ({ request }) => {
    const res = await auth.api.signOut({
      headers: request.headers
    })
    if (res.success) {
      redirect(303, "/login")
    }
  }

} satisfies Actions
