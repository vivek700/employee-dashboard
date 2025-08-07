<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let isDisabled = $state(false);
  let {data, action, buttonText = "Submit"} = $props()
</script>

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
	class="ml-5 p-2"
>
	<h2 class="py-4 text-2xl">Employee Details</h2>
	<div class="flex flex-col p-3">
		<!-- Employee Name -->
		<div>
			<label for="firstname">First Name: </label>
			<input name="firstname" id="firstname" type="text" value={data?.employee?.firstname || ""} placeholder="Enter first name" required />
		</div>
		<div>
			<label for="lastname">Last Name: </label>
			<input
        value={data?.employee?.lastname || ""}
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
			<input type="date" value={data?.employee?.birthdate || "1999-01-01"} name="birthdate" id="birthdate"  required />
		</div>
		<!-- Email -->
		<div>
			<label for="email">Email:</label>
			<input type="email" id="email" name="email" value={data?.employee?.email || ""} placeholder="Enter email address" required />
		</div>
		<!-- Department -->
		<div>
			<label for="department">Department:</label>
			<select class="text-black" name="department" id="department" required>
				<option value={data?.employee?.department || ""} >{ data?.employee?.department || "--Select Department--"}</option>
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
			>{buttonText} Employee Details</button
		>
	</div>
</form>
