import { redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"
import { API_URL } from "$env/static/private"

export const actions = {
  add: async ({ request }) => {
    const data = await request.formData()
    const firstname = data.get('firstname')
    const lastname = data.get('lastname')
    const birthdate = data.get('birthdate')
    const email = data.get('email')
    const department = data.get('department')
    const res = await fetch(`${API_URL}/employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, birthdate, email, department })
    })
    console.log(await res.json())

    redirect(303, "/dashboard/employees")
  }
} satisfies Actions
