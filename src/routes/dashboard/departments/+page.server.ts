import { deleteDepartment, fetchDepartments } from "$lib/data"
import type { Actions, PageServerLoad } from "./$types"


export const load: PageServerLoad = async () => {
  return {
    departments: fetchDepartments()

  }
}


export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData()
    const departmentName = data.get('departmentName') as string
    await deleteDepartment(departmentName)
  }
} satisfies Actions
