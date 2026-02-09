<script>
	import { Nav } from '$lib';

	const { data } = $props();
</script>

<Nav p_name={'projects'} />

<div class="flex gap-6 p-28">
	{#each data.projects as project}
		<div class="border border-charcoal p-3">
			<div class="text-2xl font-semibold">
				{project.name}
			</div>
		</div>
	{/each}
</div>
