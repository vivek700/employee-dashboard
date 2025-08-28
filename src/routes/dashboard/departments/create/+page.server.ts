import { createDepartment } from "$lib/data"
import { error, fail, type Actions } from "@sveltejs/kit"

export const actions = {
  create: async (event) => {
    const data = await event.request.formData()
    const name = data.get('department') as string
    const res = await createDepartment(name)
    if (res.status === 409) {
      const message = "Department already exists."
      return fail(409, { name, message, incorrect: true })
    } else if (res.status === 400) {
      const message = "Enter correct details."
      return fail(400, { message, missing: true })

    }
    if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
    return { message: 'Department successfully added!', success: true }
  }
} satisfies Actions
