<script lang="ts">
	import { enhance } from '$app/forms';
	import { LoaderCircle } from 'lucide-svelte';
	let isDisabled: boolean = $state(false);
	let { employee, departments, action, form = null } = $props();

	function handleForm() {
		form = null;
	}

	let employeeDetails = $state({
		firstname: employee?.firstname || '',
		lastname: employee?.lastname || '',
		birthdate: employee?.birthdate || '1999-01-01',
		email: employee?.email || '',
		departments: employee?.departments || []
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
>
	<div class="flex flex-col p-3 text-sm">
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
			<p class="mt-1 hidden text-xs text-gray-500 md:block">
				Hold down Ctrl to select multiple options.
			</p>
			<select
				class="text-sm text-black"
				bind:value={employeeDetails.departments}
				name="departments"
				id="departments"
				multiple
			>
				<option>--Select Department--</option>
				{#await departments then departments}
					{#each departments as department}
						<option value={department?.name}>{department.name}</option>
					{/each}
				{/await}
			</select>
			{#if form?.incorrect}
				<p class=" absolute text-sm text-yellow-600">{form?.message}</p>
			{:else if form?.missing}
				<p class=" absolute text-sm text-red-600">{form?.message}</p>
			{:else if form?.success}
				<p class=" absolute text-sm text-green-600">{form?.message}</p>
			{/if}
		</div>
		{#if departments instanceof Promise || employee instanceof Promise}
			<button
				class="mt-8 flex h-10 w-xs cursor-not-allowed items-center justify-center self-center rounded-md bg-gray-600"
				type="button"
			>
				Please wait...
			</button>
		{:else}
			<button
				disabled={isDisabled}
				class:cursor-not-allowed={isDisabled}
				class:cursor-pointer={!isDisabled}
				type="submit"
				class="mt-8 flex h-10 w-xs cursor-pointer items-center justify-center self-center rounded-md bg-blue-600"
				class:bg-gray-500={isDisabled}
				class:animate-pulse={isDisabled}
			>
				{#if isDisabled}
					{action === 'add' ? 'Adding Employee...' : 'Updating Employee...'}
				{:else}
					{action === 'add' ? 'Submit Employee Details' : 'Update Employee Details'}
				{/if}
			</button>
		{/if}
	</div>
</form>
