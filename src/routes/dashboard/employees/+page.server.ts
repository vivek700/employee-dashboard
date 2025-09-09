import { deleteEmployee, fetchEmployees } from "$lib/data";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  return {
    employees: fetchEmployees(fetch)
  }
}

export const actions = {
  delete: async (event) => {

    const data = await event.request.formData()
    const id = data.get('id') as string
    await deleteEmployee(id, event.fetch)

  },


} satisfies Actions
