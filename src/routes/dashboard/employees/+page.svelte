<script lang="ts">
	import { enhance } from '$app/forms';
	import AddEmployee from '$lib/components/employees/buttons/AddEmployee.svelte';
	import { Pencil, Trash } from 'lucide-svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	$effect(() => {
		console.log(data);
	});
</script>

<div class="ml-5 px-2 py-6">
	<div class="flex items-center gap-x-6 pb-6">
		<h3 class="py-2 text-2xl">Employees</h3>
		<AddEmployee />
	</div>
	<div class="rounded-md bg-slate-800 p-2">
		<table class="min-w-full">
			<thead class="rounded-md text-left text-sm font-normal">
				<tr>
					<th scope="col" class="p-4">Name</th>
					<th scope="col" class="py-4">Email</th>
					<th scope="col" class="py-4">DOB</th>
					<th scope="col" class="py-4">Department</th>
					<th scope="col" class="relative py-4"><span class="sr-only"> edit </span></th>
				</tr>
			</thead>
			<tbody class="bg-slate-700">
				{#each data?.employees as employee}
					<tr
						class="w-full border-b border-b-slate-500 last:border-none [&:first-child>td:first-child]:rounded-tl-md [&:first-child>td:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md"
					>
						<td class="px-4 py-3 whitespace-nowrap">
							<p>{employee.firstname} {employee.lastname}</p>
						</td>
						<td class="py-3 whitespace-nowrap">
							<p>{employee.email}</p>
						</td>
						<td class="py-3 whitespace-nowrap">
							<p>
								{employee.birthdate}
							</p>
						</td>
						<td class="py-3 pr-4 whitespace-nowrap">
							<p>
								{employee.department}
							</p>
						</td>
						<td>
							<form class="flex justify-end gap-x-2 pr-4" method="POST" use:enhance>
								<input type="hidden" name="id" value={employee?._id} />
								<a
									href={`employees/${employee._id}/edit`}
									title="update"
									class="rounded bg-slate-600 p-1.5"
								>
									<Pencil size={20} />
								</a>
								<button
									type="submit"
									class="cursor-pointer rounded bg-slate-600 p-1.5"
									title="delete"
									formaction="?/delete"
								>
									<Trash size={20} />
								</button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
