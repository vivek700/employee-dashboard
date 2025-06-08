<script>
	let { children } = $props();
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<div class="flex">
	<NavBar />
	{@render children()}
</div>
