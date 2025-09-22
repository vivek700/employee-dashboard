import { auth } from '$lib/auth'
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import { API_URL, INTERNAL_API_KEY } from '$env/static/private'


export const actions = {
  signIn: async ({ fetch, locals }) => {
    try {
      const response = await auth.api.signInAnonymous()
      const user = {
        name: response?.user?.name,
        email: response?.user?.email,
        id: response?.user?.id,
        isAnonymous: response?.user?.name === "Anonymous" ? true : false

      }
      console.log(user)
      const res = await fetch(`${API_URL}/auth/handshake`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'internal-api-key': INTERNAL_API_KEY,
        },
        body: JSON.stringify(user)
      })


    } catch (err) {
      console.log(err)
    } finally {
      console.log("redirecting...")
      redirect(303, "/dashboard")
    }

  },

} satisfies Actions
