import { API_URL, INTERNAL_API_KEY } from "$env/static/private"
import { error } from '@sveltejs/kit'
import type { Employee } from "./types"

export async function fetchDepartments(fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/departments`, {
    headers: {
      'internal-api-key': INTERNAL_API_KEY
    },
    credentials: 'include'
  })
  if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
  return await res.json()

}

export async function fetchDepartment(id: string, fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/departments/${id}`, {
    headers: {
      'internal-api-key': INTERNAL_API_KEY
    }
  })
  if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
  return await res.json()

}

export async function fetchEmployee(id: string, fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/employees/${id}`, {
    headers: {
      'internal-api-key': INTERNAL_API_KEY
    },
    credentials: 'include'
  })
  if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
  return await res.json()
}

export async function fetchEmployees(fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/employees`, {
    headers: {
      'internal-api-key': INTERNAL_API_KEY,
    },
    credentials: 'include'
  })
  if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
  const data = await res.json()
  return data.employees
}

export async function createDepartment(departmentName: string, fetch: typeof globalThis.fetch): Promise<Response> {
  const res = await fetch(`${API_URL}/departments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'internal-api-key': INTERNAL_API_KEY,
    },
    body: JSON.stringify({ name: departmentName })
  })
  return res
}

export async function updateDepartment(oldName: string, newName: string, fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/departments`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'internal-api-key': INTERNAL_API_KEY,
    },
    body: JSON.stringify({ oldName: oldName, newName: newName })
  })
  return res

}

export async function deleteDepartment(name: string, fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/departments`, {
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

export async function addEmployee(employee: Employee, fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/employees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'internal-api-key': INTERNAL_API_KEY,
    },
    body: JSON.stringify(employee)
  })
  return res
}
export async function updateEmployee(id: string, employee: Employee, fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/employees`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
      'internal-api-key': INTERNAL_API_KEY,
    },
    body: JSON.stringify({ id: id, ...employee })
  })
  return res
}

export async function deleteEmployee(id: string, fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/employees`, {
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

export async function resetData(fetch: typeof globalThis.fetch) {
  const res = await fetch(`${API_URL}/reset-data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'internal-api-key': INTERNAL_API_KEY,
    },
  })
  if (!res.ok) error(res.status, { message: res.statusText || 'Request failed' })
  return true
}
