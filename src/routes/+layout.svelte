<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
</svelte:head>

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
