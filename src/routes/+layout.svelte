<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		background-color: hsl(222.2,47.4%,11.2%);
		color: hsl(0, 0%, 100%);
	}
</style>
