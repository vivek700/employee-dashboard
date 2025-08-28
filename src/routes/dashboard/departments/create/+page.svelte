<script lang="ts">
	import Form from '$lib/components/departments/Form.svelte';
	import type { PageProps } from '../$types';
	let { form }: PageProps = $props();
</script>

<Form action="create" {form} />
