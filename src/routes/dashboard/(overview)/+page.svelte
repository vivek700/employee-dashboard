<script lang="ts">
	import type { PageProps } from './$types';
	import Card from '$lib/components/dashboard/Card.svelte';
	import EmployeesCard from '$lib/components/dashboard/EmployeesCard.svelte';
	import DepartmentsCard from '$lib/components/dashboard/DepartmentsCard.svelte';
	import { LoaderCircle } from 'lucide-svelte';
	let { data }: PageProps = $props();
	import { enhance } from '$app/forms';
	import { authClient } from '$lib/auth-client';
	const session = authClient.useSession();
	$inspect(data);
</script>

<div class="flex-1">
	<section class="mx-auto w-11/12 py-7">
		<div class="flex items-center justify-between">
			<h1 class="font-serif text-xl md:text-3xl">Dashboard</h1>
			{#if $session?.data?.user.isAnonymous}
				<form action="?/reset" method="POST" use:enhance>
					<button
						class=" cursor-pointer rounded-md bg-slate-700 px-2 py-1 text-xs"
						title="Reset data">Reset</button
					>
				</form>
			{/if}
		</div>
		<div class="flex justify-between gap-4 pt-4 md:gap-10">
			{#await Promise.all([data.employees, data.departments])}
				<Card title="Total Employees" type="Users" />
				<Card title="Total Departments" type="Departments" />
			{:then [employees, departments]}
				<Card title="Total Employees" value={employees?.length} type="Users" />
				<Card title="Total Departments" value={departments?.length} type="Departments" />
			{/await}
		</div>
		<h2 class="py-5 font-serif text-xl md:text-3xl">Recent Employees</h2>
		{#await data.employees}
			<div class="flex justify-center">
				<LoaderCircle class="animate-spin" />
			</div>
		{:then employees}
			<EmployeesCard {employees} />
		{/await}
		<h2 class="py-5 font-serif text-xl md:text-3xl">Department Overview</h2>
		{#await data.departments}
			<div class="flex justify-center">
				<LoaderCircle class="animate-spin" />
			</div>
		{:then departments}
			<DepartmentsCard {departments} />
		{/await}
	</section>
</div>
