<script>
	import AddEmployee from '$lib/components/employees/buttons/AddEmployee.svelte';
</script>

<div class="ml-5">
	<h3>Employees</h3>
	<AddEmployee />
	<div>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Department</th>
				</tr>
			</thead>
		</table>
	</div>
</div>
