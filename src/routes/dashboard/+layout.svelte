<script>
	let { children } = $props();
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
{@render children()}
