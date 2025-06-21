<script>
	import { enhance } from '$app/forms';
</script>

<form action="?/add" method="POST" use:enhance>
	<h2>Employee Details</h2>
	<div>
		<!-- Employee Name -->
		<div>
			<label for="firstName">First Name: </label>
			<input name="firstName" id="firstName" type="text" placeholder="Enter first name" required />
		</div>
		<div>
			<label for="lastName">Last Name: </label>
			<input
				class="text-black"
				name="lastName"
				id="lastName"
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
				<option value="Webdev">Web Development</option>
			</select>
		</div>
		<button type="submit" class="h-10 w-xs bg-blue-600">Submit Employee Details</button>
	</div>
</form>

<style>
	input {
		color: black;
	}
</style>
