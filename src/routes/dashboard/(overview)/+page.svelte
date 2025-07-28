<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '$lib/components/dashboard/Card.svelte';
	import EmployeesCard from '$lib/components/dashboard/EmployeesCard.svelte';
	import DepartmentsCard from '$lib/components/dashboard/DepartmentsCard.svelte';
	let { data }: PageProps = $props();
</script>

<div class="flex-1">
	<section class="mx-auto w-11/12 py-7">
		<h1 class="font-serif text-3xl">Dashboard</h1>
		<div class="flex justify-between gap-10 pt-4">
			<Card title="Total Employees" value={data?.employees?.length} type="Users" />
			<Card title="Total Departments" value={data?.departments?.length} type="Departments" />
		</div>
		<h2 class="py-5 font-serif text-3xl">Recent Employees</h2>
		<EmployeesCard employees={data.employees} />
		<h2 class="py-5 font-serif text-3xl">Department Overview</h2>
		<DepartmentsCard departments={data?.departments} />
	</section>
</div>
