<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-lvh flex-col">
	<div class="flex grow">
		<div class="h-full w-full">
			{@render children()}
		</div>
	</div>

	<footer class="flex shrink bg-teal p-2">
		<div class="text-nowrap">a U.K. tech company</div>
		<div class="w-full flex justify-end">source: </div>
	</footer>
</div>
