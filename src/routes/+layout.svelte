<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-lvh flex-col text-charcoal">
	<div class="flex grow">
		<div class="h-full w-full">
			{@render children()}
		</div>
	</div>

	<footer class="flex shrink bg-teal p-3">
		<div class="text-nowrap">a U.K. tech company</div>
		<div class="flex w-full justify-end gap-1.5">
			<div>source:</div>
			<a class="underline decoration-charcoal" href="https://github.com/harrisbisset/smallsoftware">
				github.com
			</a>
		</div>
	</footer>
</div>
