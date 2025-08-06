<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	$effect(() => {
		console.log(data);
	});
</script>

<h1>this is a edit page</h1>
