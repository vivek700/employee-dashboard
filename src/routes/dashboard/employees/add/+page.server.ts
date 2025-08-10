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
    const departments = data.getAll('departments') as string[]
    const employee = {
      firstname: data.get('firstname') as string,
      lastname: data.get('lastname') as string,
      birthdate: data.get('birthdate') as string,
      email: data.get('email') as string,
      departments: departments

    }
    const res = await addEmployee(employee)
    if (res) return { success: true }

  }
} satisfies Actions
