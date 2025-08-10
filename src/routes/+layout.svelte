<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<style>
	:root {
		--bg-color: hsl(222.2, 47.4%, 11.2%);
		--text-color: hsl(0, 0%, 100%);
	}

	:global {
		body {
			background-color: hsl(222.2, 47.4%, 11.2%);
			color: hsl(0, 0%, 100%);
		}
		input,
		select {
			background-color: var(--bg-color);
			color: var(--text-color);
			border-radius: 10px;
			width: 100%;
			margin-block: 0.3rem;
		}
		input[type='date']::-webkit-calendar-picker-indicator {
			filter: invert(1);
			cursor: pointer;
		}
	}
</style>
