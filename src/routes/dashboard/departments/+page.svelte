<script lang="ts">
	import { enhance } from '$app/forms';
	import AddDepartmentButton from '$lib/components/departments/AddDepartmentButton.svelte';
	import { LoaderCircle, Pencil, Trash } from 'lucide-svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<div class="px-2 pt-8 md:mx-5">
	<div class="flex items-center gap-x-8 pb-5">
		<h2 class="text-2xl">Departments</h2>
		<AddDepartmentButton />
	</div>
	{#await data.departments}
		<div class="flex justify-center">
			<LoaderCircle class="animate-spin" />
		</div>
	{:then departments}
		<div class="rounded-md bg-slate-800 p-3">
			<ul>
				{#each departments as department}
					<li
						class="flex items-center justify-between border-b border-slate-500 bg-slate-900 px-4 py-2 text-sm capitalize first:rounded-t-md last:rounded-b-md last:border-none"
					>
						{department?.name}
						<form method="POST" class="flex gap-x-3" use:enhance>
							<a
								title="update"
								href={`departments/${department?._id}/edit`}
								class="cursor-pointer rounded-md bg-slate-700 p-2"
							>
								<Pencil size={15} />
							</a>
							<input type="hidden" name="id" value={department?._id} />
							<button
								type="submit"
								aria-label="Delete"
								title="delete"
								formaction="?/delete"
								class="cursor-pointer rounded-md bg-slate-700 p-2"
							>
								<Trash size={15} aria-hidden="true" />
							</button>
						</form>
					</li>
				{/each}
			</ul>
		</div>
	{/await}
</div>
