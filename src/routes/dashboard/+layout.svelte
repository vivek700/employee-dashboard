<script>
	let { children } = $props();
	import NavBar from '$lib/components/dashboard/NavBar.svelte';
</script>

<div class="flex">
	<NavBar />
	<main class="flex-1">
		{@render children()}
	</main>
</div>
