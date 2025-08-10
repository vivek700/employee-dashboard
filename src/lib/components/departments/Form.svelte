<script lang="ts">
	import { enhance } from '$app/forms';
	let isDisabled = $state(false);
	let { action, value = '', status = false } = $props();
</script>

<div>
	<form
		action={`?/${action}`}
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
		<div class="ml-5 p-8">
			<label for="department" class="text-xl">Department Name: </label>
			<input type="hidden" name="oldname" {value} />
			<input
				onclick={() => {
					status = false;
				}}
				{value}
				type="text"
				id="department"
				name="department"
				required
				placeholder="Enter department name"
			/>
			<p class=" absolute text-sm text-green-600" class:hidden={!status}>
				Department created successfully!
			</p>
		</div>
		<button
			disabled={isDisabled}
			class=" h-10 w-xs self-center rounded-md bg-blue-500 capitalize"
			type="submit"
			class:cursor-not-allowed={isDisabled}
			class:cursor-pointer={!isDisabled}>{action}</button
		>
	</form>
</div>
