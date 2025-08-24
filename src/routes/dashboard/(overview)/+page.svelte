<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '$lib/components/dashboard/Card.svelte';
	import EmployeesCard from '$lib/components/dashboard/EmployeesCard.svelte';
	import DepartmentsCard from '$lib/components/dashboard/DepartmentsCard.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	let { data }: PageProps = $props();
</script>

<div class="flex-1">
	<section class="mx-auto w-11/12 py-7">
		<h1 class="font-serif text-3xl">Dashboard</h1>
		<div class="flex justify-between gap-4 pt-4 md:gap-10">
			{#await Promise.all([data.employees, data.departments])}
				<Card title="Total Employees" type="Users" />
				<Card title="Total Departments" type="Departments" />
			{:then [employees, departments]}
				<Card title="Total Employees" value={employees?.length} type="Users" />
				<Card title="Total Departments" value={departments?.length} type="Departments" />
			{/await}
		</div>
		<h2 class="py-5 font-serif text-3xl">Recent Employees</h2>
		{#await data.employees}
			<LoaderCircle class="animate-spin" />
		{:then employees}
			<EmployeesCard {employees} />
		{/await}
		<h2 class="py-5 font-serif text-3xl">Department Overview</h2>
		{#await data.departments}
			<LoaderCircle class="animate-spin" />
		{:then departments}
			<DepartmentsCard {departments} />
		{/await}
	</section>
</div>
