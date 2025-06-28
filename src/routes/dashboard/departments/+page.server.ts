import { API_URL } from "$env/static/private"
import type { Actions } from "@sveltejs/kit"

export const actions = {
  create: async (event) => {
    const data = await event.request.formData()
    const name = data.get('department')

    const res = await fetch(`${API_URL}/department`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
    console.log(await res.json())
  }
} satisfies Actions
