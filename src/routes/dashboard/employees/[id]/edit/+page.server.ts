import { fetchDepartments, fetchEmployee, updateEmployee } from '$lib/data'
import type { Employee } from '$lib/types'
import { redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'


export const load: PageServerLoad = async ({ params }) => {
  const id = params.id as string
  return {
    departments: await fetchDepartments(),
    employee: await fetchEmployee(id)
  }
}

export const actions = {
  update: async (event) => {
    const id = event.params.id
    const data = await event.request.formData()
    const employee = Object.fromEntries(data) as Employee
    const res = await updateEmployee(id, employee)
    if (res) {
      redirect(303, "/dashboard/employees")
    }

  }
} satisfies Actions
