<script lang="ts">
	import Form from '$lib/components/departments/Form.svelte';
	import type { PageProps } from '../$types';
	let { data, form }: PageProps = $props();
	$effect(() => {
		console.log(form);
	});
</script>

<Form action="create" status={form?.success} />
