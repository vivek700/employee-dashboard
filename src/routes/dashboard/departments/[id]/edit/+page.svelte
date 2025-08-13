<script lang="ts">
	import Form from '$lib/components/departments/Form.svelte';
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
</script>

<Form action="update" value={data?.department?.name} {form} />
