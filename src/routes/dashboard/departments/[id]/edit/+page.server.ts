import { fetchDepartment, updateDepartment } from "$lib/data";
import { redirect } from "@sveltejs/kit";
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
    const newName = data.get('department') as string
    const res = await updateDepartment(oldName, newName)
    if (res) {
      redirect(303, "/dashboard/departments")
    }
  }
} satisfies Actions
