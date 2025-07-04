<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let { form }: PageProps = $props();
	let isDisabled = $state(false);
</script>

<div>
	<form
		action="?/create"
		method="POST"
		use:enhance={() => {
			isDisabled = true;

			return async ({ update }) => {
				await update();
				isDisabled = false;
			};
		}}
		class="flex h-full w-full flex-col"
	>
		<div class="p-4">
			<label for="department">Department Name: </label>
			<input
				class="my-3"
				type="text"
				id="department"
				name="department"
				required
				placeholder="Enter department name"
			/>
		</div>
		<button
			disabled={isDisabled}
			class=" h-10 w-xs self-center rounded-md bg-blue-500"
			type="submit"
			class:cursor-not-allowed={isDisabled}
			class:cursor-pointer={!isDisabled}>Create</button
		>
	</form>
</div>
