import { auth } from '$lib/auth'
import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'
import type { User } from '$lib/types'
import { handshake } from '$lib/data'

export const load: PageServerLoad = async ({ locals, fetch }) => {
  const user: User = {
    name: locals?.user?.name as string,
    email: locals?.user?.email as string,
    id: locals?.user?.id as string,
    isAnonymous: locals?.user?.name === 'Anonymous' ? true : false
  }
  if (locals.user) {
    const res = await handshake(user, fetch)
    if (res.ok) {
      redirect(303, "/dashboard")
    }
  }
}

export const actions = {
  signIn: async () => {
    try {
      await auth.api.signInAnonymous()
    } catch (err) {
      console.log(err)
    }
  },

} satisfies Actions
