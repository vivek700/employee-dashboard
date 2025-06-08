<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { House, Layers, Power, PowerIcon, Users } from 'lucide-svelte';
</script>

<nav class="flex h-screen flex-1 flex-col bg-slate-700 p-2 md:max-w-2xs">
	<div class="flex h-36 items-end rounded-md bg-[#9A6532] p-3">
		<h1 class="font-serif text-2xl">Apollonia Dental <br /> Practice</h1>
	</div>
	<ul class="mt-3 space-y-2 text-sm">
		<li
			class="rounded-md bg-slate-600 hover:bg-slate-800"
			class:bg-slate-800={page.url.pathname === '/dashboard'}
		>
			<a href="/dashboard" class="link">
				<House size={20} />
				Home</a
			>
		</li>
		<li
			class="rounded-md bg-slate-600 hover:bg-slate-800"
			class:bg-slate-800={page.url.pathname === '/dashboard/employees'}
		>
			<a href="/dashboard/employees" class="link">
				<Users size={20} />
				Employees</a
			>
		</li>
		<li
			class="rounded-md bg-slate-600 hover:bg-slate-800"
			class:bg-slate-800={page.url.pathname === '/dashboard/departments'}
		>
			<a href="/dashboard/departments" class="link">
				<Layers size={20} />
				Departments</a
			>
		</li>
	</ul>
	<form method="POST" class="mt-auto h-auto w-full text-sm" use:enhance>
		<button
			class="flex h-[45px] cursor-pointer items-center gap-2 rounded-md bg-slate-600 px-4 hover:bg-slate-800"
		>
			<Power size={20} />
			Sign Out
		</button>
	</form>
</nav>

<style>
	.link {
		display: flex;
		place-items: center;
		padding: 0.8rem;
		width: 100%;
		column-gap: 8px;
	}
</style>
