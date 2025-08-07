<script lang="ts">
	import Form from '$lib/components/employees/Form.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	$effect(() => {
		console.log(data);
	});
</script>

<Form {data} action="update" buttonText="Update" />
