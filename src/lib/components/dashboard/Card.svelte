<script lang="ts">
	import { Layers, Users } from 'lucide-svelte';

	let { title, value = -1, type } = $props();
</script>

<div class=" flex-auto rounded-md bg-slate-800 p-2">
	<div class="flex items-center gap-1 p-1 pb-2 md:gap-2 md:p-3">
		{#if type === 'Users'}
			<Users size={20} class="h-4 w-4 md:h-5 md:w-5" />
		{:else}
			<Layers size={20} class="h-4 w-4 md:h-5 md:w-5" />
		{/if}
		<h3 class="text-xs font-medium md:text-sm">
			{title}
		</h3>
	</div>
	<div class="rounded-md bg-slate-900 px-4 py-5 md:py-7">
		{#if value < 0}
			<p class="mx-auto h-7 w-4 animate-pulse rounded-md bg-slate-700 md:h-9 md:w-7"></p>
		{:else}
			<p class="text-center text-xl md:text-3xl">
				{value}
			</p>
		{/if}
	</div>
</div>
