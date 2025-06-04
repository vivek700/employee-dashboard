import type { PageServerLoad } from './$types'



export const load: PageServerLoad = async () => {
  console.log('logging')
  return {
    data: "im am the data"
  }

}
