import type { Actions, PageServerLoad } from './$types'
import { fetchDepartments, fetchEmployees, resetData } from '$lib/data'
import type { } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
  return {
    employees: fetchEmployees(fetch),
    departments: fetchDepartments(fetch)
  }
}

export const actions = {
  reset: async ({ fetch }) => {
    await resetData(fetch)
  }
} satisfies Actions
