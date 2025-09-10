import { auth } from '$lib/auth'
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'


export const actions = {
  signIn: async () => {
    try {
      await auth.api.signInAnonymous()
    } catch (err) {
      console.log(err)
    } finally {
      redirect(303, "/dashboard")
    }

  },

} satisfies Actions
