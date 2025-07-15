<script>
	let { children } = $props();
	import NavBar from '$lib/components/dashboard/NavBar.svelte';
</script>

<div class="flex">
	<NavBar />
	<main class="ml-60 flex-1">
		{@render children()}
	</main>
</div>
