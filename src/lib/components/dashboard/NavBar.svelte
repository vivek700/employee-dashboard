<script>
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { House, Layers, Power, Users } from 'lucide-svelte';
</script>

<nav class="flex-1 bg-[#1e293b] p-2 md:fixed md:flex md:h-screen md:w-3xs md:flex-col">
	<div class="flex h-36 items-end rounded-md bg-[#9A6532] p-3">
		<h1 class="font-serif text-2xl">Apollonia Dental <br /> Practice</h1>
	</div>
	<ul class="mt-3 flex justify-between gap-x-2 text-sm md:block md:space-y-2">
		<li
			class=" flex flex-1 justify-center rounded-md bg-slate-700 hover:bg-slate-900 md:block"
			class:bg-slate-900={page.url.pathname === '/dashboard'}
		>
			<a href="/dashboard" class="link">
				<House size={20} />
				<span class="hidden md:block"> Home </span>
			</a>
		</li>
		<li
			class="flex flex-1 justify-center rounded-md bg-slate-700 hover:bg-slate-900 md:block"
			class:bg-slate-900={page.url.pathname === '/dashboard/employees'}
		>
			<a href="/dashboard/employees" class="link">
				<Users size={20} />
				<span class="hidden md:block"> Employees</span>
			</a>
		</li>
		<li
			class="flex flex-1 justify-center rounded-md bg-slate-700 hover:bg-slate-900 md:block"
			class:bg-slate-900={page.url.pathname === '/dashboard/departments'}
		>
			<a href="/dashboard/departments" class="link">
				<Layers size={20} />
				<span class="hidden md:block"> Departments</span>
			</a>
		</li>
		<li class="flex flex-1 md:hidden">
			<form method="POST" class=" w-full" use:enhance>
				<button
					class="flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-slate-700 p-2.5 text-sm hover:bg-slate-900"
				>
					<Power size={20} />
					<span class="hidden md:block"> Sign Out</span>
				</button>
			</form>
		</li>
	</ul>
	<form method="POST" class="mt-auto hidden h-auto w-full text-sm md:block" use:enhance>
		<button
			class="flex h-[45px] cursor-pointer items-center gap-2 rounded-md bg-slate-700 px-4 hover:bg-slate-900"
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
		padding: 0.6rem;
		column-gap: 9px;
	}
</style>
