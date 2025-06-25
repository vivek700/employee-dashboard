import type { PageServerLoad } from './$types'
import { API_URL } from '$env/static/private'
import { error } from '@sveltejs/kit'


export const load: PageServerLoad = async ({ fetch }) => {

  const res = await fetch(`${API_URL}/employee`)
  const data = await res.json()
  if (!data) {
    error(404, {
      message: 'Not found'
    })
  }
  return {
    employees: data.employees
  }

}
