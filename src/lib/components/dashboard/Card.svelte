<script lang="ts">
	import { Layers, Users } from 'lucide-svelte';

	let { title, value = 0, type } = $props();
</script>

<div class=" flex-auto rounded-md bg-slate-800 p-2">
	<div class="flex items-center gap-2 p-3">
		{#if type === 'Users'}
			<Users size={20} />
		{:else}
			<Layers size={20} />
		{/if}
		<h3 class="text-sm font-medium">
			{title}
		</h3>
	</div>
	<p class="rounded-md bg-slate-900 px-4 py-7 text-center text-3xl">
		{value}
	</p>
</div>
