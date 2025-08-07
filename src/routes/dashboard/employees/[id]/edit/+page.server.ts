import { fetchDepartment, fetchDepartments, fetchEmployee, fetchEmployees } from '$lib/data'
import type { Actions, PageServerLoad } from './$types'


export const load: PageServerLoad = async ({ params }) => {
  const id = params.id as string
  return {
    departments: await fetchDepartments(),
    employee: await fetchEmployee(id)
  }
}

export const actions = {
  update: async () => {
    console.log("This is a employee update page")
  }
} satisfies Actions
