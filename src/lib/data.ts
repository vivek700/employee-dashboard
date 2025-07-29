import { API_URL } from "$env/static/private"
import { error } from '@sveltejs/kit'
import type { Employee } from "./types"

export async function fetchDepartments() {
	const res = await fetch(`${API_URL}/department`)
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return await res.json()

}

export async function fetchDepartment(id: string) {
	const res = await fetch(`${API_URL}/department/${id}`)
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return await res.json()

}


export async function fetchEmployees() {
	const res = await fetch(`${API_URL}/employee`)
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	const data = await res.json()
	return data.employees
}

export async function createDepartment(departmentName: string): Promise<boolean> {
	const res = await fetch(`${API_URL}/department`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name: departmentName })
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return true
}

export async function updateDepartment(oldName: string, newName: string) {
	const res = await fetch(`${API_URL}/department`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ oldName: oldName, newName: newName })
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return true

}

export async function deleteDepartment(name: string) {

	const res = await fetch(`${API_URL}/department`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
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
		},
		body: JSON.stringify(employee)
	})
	if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
	return true

}
