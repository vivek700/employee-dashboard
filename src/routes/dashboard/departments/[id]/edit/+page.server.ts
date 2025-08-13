import { fetchDepartment, updateDepartment } from "$lib/data";
import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const id = params.id as string
  return {
    department: await fetchDepartment(id)
  }

}

export const actions = {
  update: async (event) => {
    const data = await event.request.formData()
    const oldName = data.get('oldname') as string
    const name = data.get('department') as string
    const res = await updateDepartment(oldName, name)
    if (res.status === 409) {
      const message = "Department already exists."
      return fail(409, { name, message, incorrect: true })
    } else if (res.status === 400) {
      const message = "Enter correct details."
      return fail(400, { message, missing: true })

    }
    if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })

    if (res) {
      redirect(303, "/dashboard/departments")
    }
  }
} satisfies Actions
