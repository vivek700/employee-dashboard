import type { PageServerLoad } from './$types'
import { API_URL } from '$env/static/private'


export const load: PageServerLoad = async ({ fetch }) => {

  // const res = await fetch(`${API_URL}/employee`)
  //const data = await res.json()
  return {
    // employees: data.employees
    employees: "hi i am not an employee"
  }

}
