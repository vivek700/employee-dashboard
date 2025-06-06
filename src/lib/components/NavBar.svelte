<script>
	import { page } from '$app/state';
	import { House, Layers, Users } from 'lucide-svelte';
</script>

<nav class="h-screen max-w-2xs bg-gray-700 p-2">
	<section class="flex h-36 items-end rounded-md bg-[#9A6532] p-3">
		<h1 class="font-serif text-3xl">Apollonia Dental <br /> Practice</h1>
	</section>
	<ul class="mt-2 space-y-2">
		<li
			class="rounded-md bg-gray-600 hover:bg-gray-800"
			class:bg-gray-800={page.url.pathname === '/dashboard'}
		>
			<a href="/dashboard" class="link">
				<House />
				Home</a
			>
		</li>
		<li
			class="rounded-md bg-gray-600 hover:bg-gray-800"
			class:bg-gray-800={page.url.pathname === '/dashboard/employees'}
		>
			<a href="/dashboard/employees" class="link">
				<Users />
				Employees</a
			>
		</li>
		<li
			class="rounded-md bg-gray-600 hover:bg-gray-800"
			class:bg-gray-800={page.url.pathname === '/dashboard/departments'}
		>
			<a href="/dashboard/departments" class="link">
				<Layers />
				Departments</a
			>
		</li>
	</ul>
	<section class="mb-auto">
		<button> Sign Out </button>
	</section>
</nav>

<style>
	.link {
		display: flex;
		padding: 0.8rem;
		width: 100%;
		column-gap: 8px;
	}
</style>
