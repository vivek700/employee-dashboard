<script>
	let { children } = $props();
	import NavBar from '$lib/components/dashboard/NavBar.svelte';
</script>

<div class="flex">
	<NavBar />
	{@render children()}
</div>
