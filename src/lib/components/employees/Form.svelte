<script lang="ts">
	import { enhance } from '$app/forms';
	let isDisabled = $state(false);
	let { data, action, buttonText = 'Submit', form = null } = $props();

	function handleForm() {
		form = null;
	}

	let employeeDetails = $state({
		firstname: data?.employee?.firstname || '',
		lastname: data?.employee?.lastname || '',
		birthdate: data?.employee?.birthdate || '1999-01-01',
		email: data?.employee?.email || '',
		departments: data?.employee?.departments || []
	});
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
	class="p-2 md:ml-5"
>
	<h2 class="px-1 py-4 text-2xl">Employee Details</h2>
	<div class="flex flex-col p-3">
		<!-- Employee Name -->
		<div>
			<label for="firstname">First Name: </label>
			<input
				onclick={handleForm}
				name="firstname"
				id="firstname"
				type="text"
				bind:value={employeeDetails.firstname}
				placeholder="Enter first name"
				required
			/>
		</div>
		<div>
			<label for="lastname">Last Name: </label>
			<input
				bind:value={employeeDetails.lastname}
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
			<input
				type="date"
				bind:value={employeeDetails.birthdate}
				name="birthdate"
				id="birthdate"
				required
			/>
		</div>
		<!-- Email -->
		<div>
			<label for="email">Email:</label>
			<input
				onclick={handleForm}
				type="email"
				id="email"
				name="email"
				bind:value={employeeDetails.email}
				placeholder="Enter email address"
				required
			/>
		</div>
		<!-- Department -->
		<div>
			<label for="departments">Departments:</label>
			<p class="mt-1 text-sm text-gray-500">Hold down Ctrl to select multiple options.</p>
			<select
				class="text-black"
				bind:value={employeeDetails.departments}
				name="departments"
				id="departments"
				multiple
			>
				<option>--Select Department--</option>
				{#each data?.departments as department}
					<option value={department?.name}>{department.name}</option>
				{/each}
			</select>
			{#if form?.incorrect}
				<p class=" absolute text-sm text-yellow-600">{form?.message}</p>
			{:else if form?.missing}
				<p class=" absolute text-sm text-red-600">{form?.message}</p>
			{:else if form?.success}
				<p class=" absolute text-sm text-green-600">{form?.message}</p>
			{/if}
		</div>
		<button
			disabled={isDisabled}
			class:cursor-not-allowed={isDisabled}
			class:cursor-pointer={!isDisabled}
			type="submit"
			class="mt-8 h-10 w-xs cursor-pointer self-center rounded-md bg-blue-600"
			>{buttonText} Employee Details</button
		>
	</div>
</form>
