import { redirect } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from "./$types"
import { addEmployee, fetchDepartments } from "$lib/data"
import type { Employee } from "$lib/types"


export const load: PageServerLoad = async () => {
  return {
    departments: await fetchDepartments()
  }
}

export const actions = {
  add: async ({ request }) => {
    const data = await request.formData()
    const employee = Object.fromEntries(data) as Employee
    const res = await addEmployee(employee)
    if (res) {
      redirect(303, "/dashboard/employees")
    }
  }
} satisfies Actions
