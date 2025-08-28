import type { Actions, PageServerLoad } from './$types'
import { fetchDepartments, fetchEmployees, resetData } from '$lib/data'
import type { } from './$types'

export const load: PageServerLoad = async () => {
  return {
    employees: fetchEmployees(),
    departments: fetchDepartments()
  }
}

export const actions = {
  reset: async () => {
    await resetData()
  }
} satisfies Actions
