import { API_URL, INTERNAL_API_KEY } from "$env/static/private"
import { error } from '@sveltejs/kit'
import type { Employee } from "./types"

export async function fetchDepartments() {
	const res = await fetch(`${API_URL}/department`, {
		headers: {
			'internal-api-key': INTERNAL_API_KEY
		}
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return await res.json()

}

export async function fetchDepartment(id: string) {
	const res = await fetch(`${API_URL}/department/${id}`, {
		headers: {
			'internal-api-key': INTERNAL_API_KEY
		}
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return await res.json()

}

export async function fetchEmployee(id: string) {
	const res = await fetch(`${API_URL}/employee/${id}`, {
		headers: {
			'internal-api-key': INTERNAL_API_KEY
		}
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return await res.json()
}

export async function fetchEmployees() {
	const res = await fetch(`${API_URL}/employee`, {
		headers: {
			'internal-api-key': INTERNAL_API_KEY,
		},
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	const data = await res.json()
	return data.employees
}

export async function createDepartment(departmentName: string): Promise<Response> {
	const res = await fetch(`${API_URL}/department`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'internal-api-key': INTERNAL_API_KEY,
		},
		body: JSON.stringify({ name: departmentName })
	})
	return res
}

export async function updateDepartment(oldName: string, newName: string) {
	const res = await fetch(`${API_URL}/department`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'internal-api-key': INTERNAL_API_KEY,
		},
		body: JSON.stringify({ oldName: oldName, newName: newName })
	})
	return res

}

export async function deleteDepartment(name: string) {

	const res = await fetch(`${API_URL}/department`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'internal-api-key': INTERNAL_API_KEY,
		},
		body: JSON.stringify({ name: name })
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return true
}

export async function addEmployee(employee: Employee) {
	const res = await fetch(`${API_URL}/employee`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'internal-api-key': INTERNAL_API_KEY,
		},
		body: JSON.stringify(employee)
	})
	return res
}
export async function updateEmployee(id: string, employee: Employee) {

	const res = await fetch(`${API_URL}/employee`, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json',
			'internal-api-key': INTERNAL_API_KEY,
		},
		body: JSON.stringify({ id: id, ...employee })
	})
	return res
}

export async function deleteEmployee(id: string) {
	const res = await fetch(`${API_URL}/employee`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'internal-api-key': INTERNAL_API_KEY,
		},
		body: JSON.stringify({ id: id })
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return true
}
