<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		background-color: hsl(0, 0%, 7%);
		color: hsl(0, 0%, 100%);
	}
</style>
