<script lang="ts">
	import { Layers, Users } from 'lucide-svelte';

	let { title, value = 0, type } = $props();
</script>

<div class=" flex-auto rounded-md bg-slate-800 p-2">
	<div class="flex gap-2 p-4">
		{#if type === 'Users'}
			<Users size={20} />
		{:else}
			<Layers size={20} />
		{/if}
		<h3 class="text-sm font-medium">
			{title}
		</h3>
	</div>
	<p class="rounded-md bg-slate-600 px-4 py-8 text-center text-2xl">
		{value}
	</p>
</div>
