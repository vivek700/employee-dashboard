<script>
	let { children } = $props();
	import NavBar from '$lib/components/dashboard/NavBar.svelte';
</script>

<div class="md:flex">
	<NavBar />
	<main class="flex-1 md:ml-60">
		{@render children()}
	</main>
</div>
