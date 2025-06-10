<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '$lib/components/dashboard/Card.svelte';
	import EmployeesCard from '$lib/components/dashboard/EmployeesCard.svelte';
	import DepartmentsCard from '$lib/components/dashboard/DepartmentsCard.svelte';
	let { data }: PageProps = $props();
	// $effect(() => {
	// 	console.log(data.employees);
	// });
</script>

<div class="flex-1">
	<section class="mx-auto w-11/12 pt-7">
		<h1 class="font-serif text-3xl">Dashboard</h1>
		<div class="flex justify-between gap-10 pt-4">
			<Card title="Total Employees" value={10} type="Users" />
			<Card title="Total Departments" value={5} type="Departments" />
		</div>
		<h2 class="py-5 font-serif text-3xl">Employees</h2>
		<EmployeesCard />
		<h2 class="py-5 font-serif text-3xl">Departments</h2>
		<DepartmentsCard />
	</section>
</div>
