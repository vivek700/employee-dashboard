import { deleteDepartment, fetchDepartments } from "$lib/data"
import type { Actions, PageServerLoad } from "./$types"


export const load: PageServerLoad = async ({ fetch }) => {
  return {
    departments: fetchDepartments(fetch)

  }
}


export const actions = {
  delete: async ({ request, fetch }) => {
    const data = await request.formData()
    const departmentName = data.get('departmentName') as string
    await deleteDepartment(departmentName, fetch)
  }
} satisfies Actions
