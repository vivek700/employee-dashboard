<script lang="ts">
	import { CircleUser, Loader2, LoaderCircle } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import { authClient } from '$lib/auth-client';
	let isDisabled = $state(false);
</script>

<main class=" flex h-dvh w-full flex-col items-center justify-center">
	<div class="w-10/12 max-w-[400px]">
		<header class="flex h-36 items-end rounded-md bg-[#9A6532] p-3">
			<h1 class="font-serif text-xl md:text-3xl">Apollonia Dental Practice</h1>
		</header>
		<section class="mt-4" aria-labelledby="login-heading">
			<form
				method="POST"
				action="?/signIn"
				use:enhance={() => {
					isDisabled = true;
					return async ({ update }) => {
						await update();
						isDisabled = false;
					};
				}}
				class=" rounded-md bg-[#2B4958] px-8 pt-8 pb-10"
			>
				<h2 id="login-heading" class="pb-3 font-serif md:text-2xl">Please log in to continue.</h2>
				<!-- <div> -->
				<!-- 	<label for="email">Email</label> -->
				<!-- 	<div class="relative pt-2"> -->
				<!-- 		<input -->
				<!-- 			class="peer block w-full rounded-md border-none py-[9px] pl-8 text-sm text-black outline-none placeholder:text-gray-500" -->
				<!-- 			type="email" -->
				<!-- 			id="email" -->
				<!-- 			name="email" -->
				<!-- 			placeholder="Enter your email address" -->
				<!-- 			required -->
				<!-- 		/> -->
				<!-- 		<AtSign -->
				<!-- 			class="pointer-events-none absolute top-8 left-2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" -->
				<!-- 		/> -->
				<!-- 	</div> -->
				<!-- </div> -->
				<!-- <div class="mt-4"> -->
				<!-- 	<label for="password">Password</label> -->
				<!-- 	<div class="relative pt-2"> -->
				<!-- 		<input -->
				<!-- 			class="peer block w-full rounded-md border-none py-[9px] pl-8 text-sm text-black outline-none placeholder:text-gray-500" -->
				<!-- 			type="password" -->
				<!-- 			id="password" -->
				<!-- 			name="password" -->
				<!-- 			placeholder="Enter password" -->
				<!-- 			required -->
				<!-- 			minlength="6" -->
				<!-- 		/> -->
				<!-- 		<KeyRound -->
				<!-- 			class="pointer-events-none absolute top-8 left-2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" -->
				<!-- 		/> -->
				<!-- 	</div> -->
				<!-- </div> -->
				<!-- <button -->
				<!-- 	class="mt-5 flex h-10 w-full cursor-pointer items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50" -->
				<!-- > -->
				<!-- 	Log in -->
				<!-- 	<ArrowRight class="ml-auto h-5 w-5 text-gray-50" /> -->
				<!-- </button> -->
				<button
					onclick={async () => {
						await authClient.signIn.social({
							provider: 'google'
						});
					}}
					type="button"
					class="mt-5 flex h-10 w-full cursor-pointer items-center justify-center gap-x-1 rounded-full bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
				>
					<svg
						class="h-4 w-4"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="github"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							fill="#4285F4"
						/>
						<path
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							fill="#34A853"
						/>
						<path
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							fill="#FBBC05"
						/>
						<path
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							fill="#EA4335"
						/>
						<path d="M1 1h22v22H1z" fill="none" />
					</svg>
					Sign in with Google</button
				>
				<p class="py-4 text-center">or</p>
				<button
					disabled={isDisabled}
					class:cursor-not-allowed={isDisabled}
					class:cursor-pointer={!isDisabled}
					class="mt-1 flex h-10 w-full cursor-pointer items-center justify-center gap-x-1 rounded-full bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
				>
					{#if isDisabled}
						<LoaderCircle class="animate-spin" />
					{:else}
						<CircleUser size={18} />
						<span> As a guest </span>
					{/if}
				</button>
			</form>
		</section>
	</div>
</main>
