<script>
	let { departments } = $props();
</script>

<div class=" flex-auto rounded-md bg-slate-800 p-5">
	<ul class="flex flex-wrap gap-x-3">
		{#each departments as department}
			<li class=" my-2 rounded-md bg-slate-700 px-3 py-1.5 capitalize">{department?.name}</li>
		{/each}
	</ul>
</div>
