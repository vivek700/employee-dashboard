import { error, fail } from "@sveltejs/kit"
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
    const employee: Employee = {
      firstname: data.get('firstname') as string,
      lastname: data.get('lastname') as string,
      birthdate: data.get('birthdate') as string,
      email: data.get('email') as string,
      departments: departments

    }
    const res = await addEmployee(employee)
    if (res.status === 409) {
      const message = "Employee already exists."
      return fail(409, { message, incorrect: true })
    } else if (res.status === 400) {
      const message = "Enter correct details."
      return fail(400, { message, missing: true })
    }
    if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
    return { message: 'Employee added successfully!', success: true }

  }
} satisfies Actions
