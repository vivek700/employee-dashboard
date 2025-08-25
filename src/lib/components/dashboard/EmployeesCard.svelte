<script lang="ts">
	let { employees } = $props();
</script>

<div class=" flex-auto rounded-md bg-slate-800 px-6 py-4">
	<ul>
		{#each employees.slice(-5) as employee}
			<li
				class="flex items-center justify-between border-b border-gray-500 py-2 text-sm last:border-none"
			>
				<div>
					<p>{employee.firstname} {employee.lastname}</p>
					<p class="text-gray-400">{employee.email}</p>
				</div>
				{#if employee.departments.length > 1}
					<p>{employee.departments[0]}, ...</p>
				{:else}
					<p>{employee.departments[0]}</p>
				{/if}
			</li>
		{/each}
	</ul>
</div>
