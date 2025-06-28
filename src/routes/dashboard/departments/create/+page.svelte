<script>
	import { enhance } from '$app/forms';
</script>

<div>
	<form action="../departments?/create" method="POST" use:enhance class="h-full w-full">
		<div>
			<label for="department">Department Name: </label>
			<input
				class="text-black"
				type="text"
				id="department"
				name="department"
				required
				placeholder="Enter department name"
			/>
		</div>
		<button class="h-10 w-xs rounded-md bg-blue-500" type="submit">Create</button>
	</form>
</div>
