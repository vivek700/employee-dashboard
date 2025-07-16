import { fetchDepartments } from "$lib/data"
import type { Actions, PageServerLoad } from "./$types"


export const load: PageServerLoad = async () => {
  return {
    departments: await fetchDepartments()

  }
}


export const actions = {
} satisfies Actions
