<script lang="ts">
	import { Layers, Users } from 'lucide-svelte';

	let { title, value = -1, type } = $props();
</script>

<div class=" flex-auto rounded-md bg-slate-800 p-2">
	<div class="flex items-center gap-2 p-3">
		{#if type === 'Users'}
			<Users size={20} class="h-5 w-5" />
		{:else}
			<Layers size={20} class="h-5 w-5" />
		{/if}
		<h3 class="text-sm font-medium">
			{title}
		</h3>
	</div>
	<div class="rounded-md bg-slate-900 px-4 py-7">
		{#if value < 0}
			<p class="mx-auto h-9 w-7 animate-pulse rounded-md bg-slate-700"></p>
		{:else}
			<p class="text-center text-3xl">
				{value}
			</p>
		{/if}
	</div>
</div>
