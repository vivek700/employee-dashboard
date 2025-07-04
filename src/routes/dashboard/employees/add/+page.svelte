<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<form action="?/add" method="POST" use:enhance>
	<h2>Employee Details</h2>
	<div>
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
			<input type="date" name="birthdate" id="birthdate" required />
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
		<button type="submit" class="h-10 w-xs bg-blue-600">Submit Employee Details</button>
	</div>
</form>
