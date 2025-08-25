<script lang="ts">
	import { enhance } from '$app/forms';
	import AddEmployee from '$lib/components/employees/buttons/AddEmployee.svelte';
	import { LoaderCircle, Pencil, Trash } from 'lucide-svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="px-1 py-6 md:ml-5 md:px-2">
	<div class="flex items-center gap-x-6 pb-6">
		<h3 class="px-2 py-2 text-2xl">Employees</h3>
		<AddEmployee />
	</div>
	{#await data.employees}
		<div class="flex justify-center">
			<LoaderCircle class="animate-spin" />
		</div>
	{:then employees}
		<div class="rounded-md bg-slate-800 p-2">
			<div class="lg:hidden">
				{#each employees as employee (employee._id)}
					<div class="my-2 rounded-md bg-slate-900 p-2 text-sm">
						<div class="flex items-center justify-between border-b border-gray-600 pb-2">
							<div>
								<h3>{employee?.firstname} {employee?.lastname}</h3>
								<p class=" text-gray-400">{employee?.email}</p>
							</div>
							<div>
								{#if employee?.departments.length > 1}
									<button
										style={`--anchor-name: --department-name-${employee?._id}`}
										type="button"
										class="department-btn inline cursor-pointer"
										popovertarget={`${employee?._id}`}>{employee?.departments[0]}, ...</button
									>

									<div
										style={`--anchor-name: --department-name-${employee?._id}`}
										popover
										class="department-menu max-w-3xs border border-slate-400 bg-slate-900 p-2 text-white"
										id={`${employee?._id}`}
									>
										{#each employee?.departments as department}
											<p class="capitalize">{department}</p>
										{/each}
									</div>
								{:else}
									<p>{employee?.departments}</p>
								{/if}
							</div>
						</div>
						<div class="flex justify-between pt-2">
							<p>{employee?.birthdate}</p>
							<form class="flex gap-x-2" method="POST" use:enhance>
								<input type="hidden" name="id" value={employee?._id} />
								<a
									href={`employees/${employee._id}/edit`}
									title="update"
									class="rounded bg-slate-600 p-1.5"
								>
									<Pencil size={15} />
								</a>
								<button
									type="submit"
									class="cursor-pointer rounded bg-slate-600 p-1.5"
									title="delete"
									formaction="?/delete"
								>
									<Trash size={15} />
								</button>
							</form>
						</div>
					</div>
				{/each}
			</div>
			<table class="hidden min-w-full lg:table">
				<thead class="rounded-md text-left text-sm font-normal">
					<tr>
						<th scope="col" class="p-4">Name</th>
						<th scope="col" class="py-4">Email</th>
						<th scope="col" class="py-4">DOB</th>
						<th scope="col" class="py-4">Department</th>
						<th scope="col" class="relative py-4"><span class="sr-only"> edit </span></th>
					</tr>
				</thead>
				<tbody class="bg-slate-900">
					{#each employees as employee}
						<tr
							class="w-full border-b border-b-slate-500 last:border-none [&:first-child>td:first-child]:rounded-tl-md [&:first-child>td:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md"
						>
							<td class="px-4 py-3 whitespace-nowrap">
								<p>{employee.firstname} {employee.lastname}</p>
							</td>
							<td class="py-3 text-sm whitespace-nowrap text-gray-400">
								<p>{employee.email}</p>
							</td>
							<td class="py-3 text-sm whitespace-nowrap">
								<p>
									{employee.birthdate}
								</p>
							</td>
							<td class="py-3 whitespace-nowrap">
								<p>
									{employee?.departments}
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
	{/await}
</div>

<style>
	.department-btn {
		anchor-name: var(--anchor-name);
	}
	.department-menu {
		position: absolute;
		position-anchor: var(--anchor-name);
		inset: auto;
		top: anchor(bottom);
		right: anchor(right);
		margin: 0;
		border-radius: 5px;
	}
</style>
