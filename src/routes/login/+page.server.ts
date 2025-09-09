import { auth } from '$lib/auth'
import type { Actions } from './$types'


export const actions = {
  login: async () => {
    console.log("This a guest login action")
    const user = await auth.api.signInAnonymous()
    console.log(user)
    return {
      success: true
    }
  },
  signout: async (event) => {

    console.log("SignOut action")
  }
} satisfies Actions
