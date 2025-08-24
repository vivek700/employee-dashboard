import type { PageServerLoad } from './$types'
import { fetchDepartments, fetchEmployees } from '$lib/data'

export const load: PageServerLoad = async () => {
  return {
    employees: fetchEmployees(),
    departments: fetchDepartments()
  }
}
