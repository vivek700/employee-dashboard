import type { PageServerLoad } from './$types'
import { fetchDepartments, fetchEmployees } from '$lib/data'

export const load: PageServerLoad = async () => {
  return {
    employees: await fetchEmployees(),
    departments: await fetchDepartments()
  }
}
