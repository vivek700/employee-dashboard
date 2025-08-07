<script lang="ts">
	import Form from '$lib/components/employees/Form.svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<Form {data} action="add" />
