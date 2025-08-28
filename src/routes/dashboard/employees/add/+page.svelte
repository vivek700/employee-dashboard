<script lang="ts">
	import Form from '$lib/components/employees/Form.svelte';
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
</script>

<div class="p-2 md:ml-5">
	<h2 class="px-1 py-4 text-xl md:text-2xl">Employee Details</h2>
	{#await data.departments}
		<Form employee={{}} departments={data.departments} action="add" {form} />
	{:then departments}
		<Form employee={{}} {departments} action="add" {form} />
	{/await}
</div>
