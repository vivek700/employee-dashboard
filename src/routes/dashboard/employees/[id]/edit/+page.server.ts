import { fetchDepartment, fetchEmployee, fetchEmployees } from '$lib/data'
import type { PageServerLoad } from './$types'


export const load: PageServerLoad = async ({ params }) => {
  const id = params.id as string
  return {
    emp: await fetchEmployee(id)
  }
}
