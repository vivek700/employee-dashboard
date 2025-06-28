import type { PageServerLoad } from './$types'
import { API_URL } from '$env/static/private'
import { error } from '@sveltejs/kit'


export const load: PageServerLoad = async ({ fetch }) => {

  const res = await fetch(`${API_URL}/employee`)
  const data = await res.json()
  const res1 = await fetch(`${API_URL}/department`)
  const data1 = await res1.json()
  console.log(data1)

  if (!data) {
    error(404, {
      message: 'Not found'
    })
  }
  return {
    employees: data.employees,
    departments: data1
  }

}
