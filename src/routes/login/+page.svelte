<script lang="ts">
	import { ArrowRight, AtSign, KeyRound } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let { form }: PageProps = $props();
	$effect(() => {
		if (form?.success) {
			console.log('success');
		}
	});
</script>

<main class=" flex h-screen w-full flex-col items-center justify-center">
	<div class="w-full max-w-[400px]">
		<header class="flex h-36 items-end rounded-md bg-[#9A6532] p-3">
			<h1 class="font-serif text-3xl">Apollonia Dental Practice</h1>
		</header>
		<section class="mt-4" aria-labelledby="login-heading">
			<form method="POST" use:enhance class=" rounded-md bg-[#2B4958] px-8 pt-8 pb-10">
				<h2 id="login-heading" class="pb-3 font-serif text-2xl">Please log in to continue.</h2>
				<div>
					<label for="email">Email</label>
					<div class="relative pt-2">
						<input
							class="peer block w-full rounded-md border-none py-[9px] pl-8 text-sm text-black outline-none placeholder:text-gray-500"
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email address"
							required
						/>
						<AtSign
							class="pointer-events-none absolute top-7 left-2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
						/>
					</div>
				</div>
				<div class="mt-4">
					<label for="password">Password</label>
					<div class="relative pt-2">
						<input
							class="peer block w-full rounded-md border-none py-[9px] pl-8 text-sm text-black outline-none placeholder:text-gray-500"
							type="password"
							id="password"
							name="password"
							placeholder="Enter password"
							required
							minlength="6"
						/>
						<KeyRound
							class="pointer-events-none absolute top-7 left-2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
						/>
					</div>
				</div>
				<button
					class="mt-5 flex h-10 w-full cursor-pointer items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
				>
					Log in
					<ArrowRight class="ml-auto h-5 w-5 text-gray-50" />
				</button>
			</form>
		</section>
	</div>
</main>
