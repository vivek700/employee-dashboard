<script lang="ts">
	import { enhance } from '$app/forms';
	import AddDepartmentButton from '$lib/components/departments/AddDepartmentButton.svelte';
	import { Pencil, Trash } from 'lucide-svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	$effect(() => {
		console.log(data);
	});
</script>

<div class="ml-5 px-2 pt-8">
	<div class="flex items-center gap-x-8 pb-5">
		<h2 class="text-2xl">Departments</h2>
		<AddDepartmentButton />
	</div>
	<div class="rounded-md bg-slate-800 p-3">
		<ul>
			{#each data.departments as department}
				<li
					class="flex items-center justify-between border-b border-slate-500 bg-slate-700/50 px-4 py-2 capitalize first:rounded-t-md last:rounded-b-md last:border-none"
				>
					{department?.name}
					<form method="POST" class="flex gap-x-3" use:enhance>
						<a
							title="update"
							href={`departments/${department?._id}/edit`}
							class="cursor-pointer rounded-md bg-slate-600 p-2"
						>
							<Pencil size={20} />
						</a>
						<input type="hidden" name="departmentName" value={department?.name} />
						<button
							type="submit"
							aria-label="Delete"
							title="delete"
							formaction="?/delete"
							class="cursor-pointer rounded-md bg-slate-600 p-2"
						>
							<Trash size={20} aria-hidden="true" />
						</button>
					</form>
				</li>
			{/each}
		</ul>
	</div>
</div>
