<script>
	let { departments } = $props();
</script>

<div class=" flex-auto rounded-md bg-slate-800 p-4">
	<ul>
		{#each departments as department}
			<li>{department?.name}</li>
		{/each}
	</ul>
</div>
