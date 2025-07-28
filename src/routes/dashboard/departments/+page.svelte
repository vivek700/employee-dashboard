<script lang="ts">
	import AddDepartmentButton from '$lib/components/departments/AddDepartmentButton.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	$effect(() => {
		console.log(data);
	});
</script>

<!-- <AddDepartmentButton /> -->
<div class="ml-5 py-3">
	<h2 class="px-4 pb-4 text-2xl">Departments</h2>
	<div class="rounded-md bg-slate-800 px-4 py-2">
		<ul>
			{#each data.departments as department}
				<li class="mb-1.5 cursor-pointer rounded-md px-2 py-1.5 capitalize hover:bg-slate-600">
					{department.name}
				</li>
			{/each}
		</ul>
	</div>
</div>
