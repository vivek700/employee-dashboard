import { auth } from '$lib/auth'
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'


export const actions = {
  login: async ({ request }) => {
    const data = await request.formData()
    const email = data.get('email')
    const password = data.get('password')

    console.log(email, password)
    return {
      success: true
    }
  },
  signout: async (event) => {
    // await auth.api.signOut({
    //   headers: event.request.headers
    // })

    console.log("signout action")
  }
} satisfies Actions
