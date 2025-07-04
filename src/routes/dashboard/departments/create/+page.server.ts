import { createDepartment } from "$lib/data"
import type { Actions } from "@sveltejs/kit"

export const actions = {
  create: async (event) => {
    const data = await event.request.formData()
    const name = data.get('department') as string

    return {
      success: await createDepartment(name)

    }
  }
} satisfies Actions
