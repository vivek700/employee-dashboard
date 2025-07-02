import { API_URL } from "$env/static/private"
import { error } from '@sveltejs/kit'

export async function fetchDepartments() {
	const res = await fetch(`${API_URL}/department`)
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return await res.json()

}

export async function fetchEmployees() {
	const res = await fetch(`${API_URL}/employee`)
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	const data = await res.json()
	return data.employees
}
