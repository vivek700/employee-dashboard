import { deleteEmployee, fetchEmployees } from "$lib/data";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    employees: await fetchEmployees()
  }
}

export const actions = {
  delete: async (event) => {
    const data = await event.request.formData()
    const id = data.get('id') as string
    await deleteEmployee(id)

  },
  update: async (event) => {
    console.log("this is the update action")
  }

} satisfies Actions
