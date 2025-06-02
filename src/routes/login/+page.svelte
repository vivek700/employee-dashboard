<script>
	import { ArrowRight, AtSign, KeyRound } from 'lucide-svelte';
	import { enhance } from '$app/forms';
</script>

<main class="] flex h-screen w-full flex-col items-center justify-center">
	<section class="w-full max-w-[400px]">
		<section class="flex h-20 items-end rounded-md bg-[#9A6532] p-3 md:h-36">
			<h1 class="font-serif text-3xl">Apollonia Dental Practice</h1>
		</section>
		<section class="mt-4">
			<form action="POST" use:enhance>
				<section class=" rounded-md bg-[#2B4958] px-8 pt-8 pb-10">
					<h1 class="pb-3 font-serif text-2xl">Please log in to continue.</h1>
					<section>
						<label for="email">Email</label>
						<section class="relative pt-2">
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
						</section>
					</section>
					<section class="mt-4">
						<label for="password">Password</label>
						<section class="relative pt-2">
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
						</section>
					</section>
					<button
						class="mt-5 flex h-10 w-full cursor-pointer items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
					>
						Log in
						<ArrowRight class="ml-auto h-5 w-5 text-gray-50" />
					</button>
				</section>
			</form>
		</section>
	</section>
</main>
