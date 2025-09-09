import { fetchDepartments, fetchEmployee, updateEmployee } from '$lib/data'
import type { Employee } from '$lib/types'
import { error, fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'


export const load: PageServerLoad = async ({ params, fetch }) => {
  const id = params.id as string
  return {
    departments: fetchDepartments(fetch),
    employee: fetchEmployee(id, fetch)
  }
}

export const actions = {
  update: async (event) => {
    const id = event.params.id
    const data = await event.request.formData()
    const departments = data.getAll('departments') as string[]
    const employee: Employee = {
      firstname: data.get('firstname') as string,
      lastname: data.get('lastname') as string,
      birthdate: data.get('birthdate') as string,
      email: data.get('email') as string,
      departments: departments

    }
    const res = await updateEmployee(id, employee, event.fetch)
    if (res.status === 409) {
      const message = "Employee already exists."
      return fail(409, { message, incorrect: true })
    } else if (res.status === 400) {
      const message = "Enter correct details."
      return fail(409, { message, missing: true })
    }
    if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })

    redirect(303, "/dashboard/employees")

  }
} satisfies Actions
