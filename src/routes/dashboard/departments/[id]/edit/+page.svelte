<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	$effect(() => {
		console.log(data);
	});
</script>

<Form action="update" value={data?.department?.name} />
