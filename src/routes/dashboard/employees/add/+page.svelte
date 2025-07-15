<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	let isDisabled = $state(false);
</script>

<form
	action="?/add"
	method="POST"
	use:enhance={() => {
		isDisabled = true;
		return async ({ update }) => {
			await update();
			isDisabled = false;
		};
	}}
	class="ml-5 p-2"
>
	<h2 class="text-lg">Employee Details</h2>
	<div class="flex flex-col pt-3">
		<!-- Employee Name -->
		<div>
			<label for="firstname">First Name: </label>
			<input name="firstname" id="firstname" type="text" placeholder="Enter first name" required />
		</div>
		<div>
			<label for="lastname">Last Name: </label>
			<input
				class="text-black"
				name="lastname"
				id="lastname"
				type="text"
				placeholder="Enter last name"
				required
			/>
		</div>
		<!-- Birthdate -->
		<div>
			<label for="birthdate">Birth Date:</label>
			<input type="date" name="birthdate" id="birthdate" value="1999-01-01" required />
		</div>
		<!-- Email -->
		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" placeholder="Enter email address" required />
		</div>
		<!-- Department -->
		<div>
			<label for="department">Department:</label>
			<select class="text-black" name="department" id="department" required>
				<option value="">Select Department</option>
				{#each data?.departments as department}
					<option value={`${department?.name}`}>{department.name}</option>
				{/each}
			</select>
		</div>
		<button
			disabled={isDisabled}
			class:cursor-not-allowed={isDisabled}
			class:cursor-pointer={!isDisabled}
			type="submit"
			class="mt-2 h-10 w-xs cursor-pointer self-center rounded-md bg-blue-600"
			>Submit Employee Details</button
		>
	</div>
</form>
