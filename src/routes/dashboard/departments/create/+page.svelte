<script lang="ts">
	import { enhance } from '$app/forms';
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
		<div class="ml-5 p-8 pb-2">
			<label for="department">Department Name: </label>
			<input
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
