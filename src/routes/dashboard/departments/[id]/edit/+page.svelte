<script lang="ts">
	import Form from '$lib/components/departments/Form.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	import type { PageProps } from './$types';
	let { data, form }: PageProps = $props();
</script>

{#await data.department}
	<div class="flex justify-center pt-14">
		<LoaderCircle class="animate-spin" />
	</div>
{:then department}
	<Form action="update" value={department?.name} {form} />
{/await}
