import { createDepartment } from "$lib/data"
import { redirect, type Actions } from "@sveltejs/kit"

export const actions = {
  create: async (event) => {
    const data = await event.request.formData()
    const name = data.get('department') as string
    const res = await createDepartment(name)
    if (res) {
      redirect(303, "/dashboard/departments")
    }
  }
} satisfies Actions
