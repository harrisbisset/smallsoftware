<script lang="ts">
	import type { page_name } from './nav';

	const { p_name }: { p_name: page_name } = $props();
</script>

{#snippet design_colours()}
	<div class="h-full w-full bg-light-orange"></div>
    <div class="h-full w-full bg-light-blue"></div>
	<div class="h-full w-full bg-dark-orange"></div>
    <div class="h-full w-full bg-dark-blue"></div>
	<div class="h-full w-full bg-teal"></div>
	<div class="h-full w-full bg-charcoal"></div>
	<div class="h-full w-full bg-swamp"></div>
	<div class="h-full w-full bg-purple"></div>
{/snippet}

<div class="grid grid-cols-2 gap-12 px-6 lg:px-28 pt-6 2xl:grid-cols-3">
	<div class="flex h-80 justify-center bg-red-500">
		<div class="text-6xl font-bold">smallsoftware</div>
	</div>
	{#if p_name == 'design'}
		<!-- <div class="grid h-80 grid-cols-10 text-5xl font-semibold">
			{#each { length: 30 } as _}
				{@render design_colours()}
			{/each}
		</div> -->
		<div class="flex flex-col h-80 gap-3">
			<div class="text-5xl font-bold z-10">Design</div>
			<div class="flex h-full w-full">
				{@render design_colours()}
			</div>
		</div>
	{:else if p_name == 'home'}
		<div class="h-80 bg-red-500"></div>
	{:else}
		<div class="flex h-80 justify-center text-5xl font-semibold"></div>
	{/if}

	<div class="h-80 bg-red-500"></div>
	<div class="hidden h-80 bg-red-500 2xl:block"></div>
	<nav class="flex h-80 flex-col gap-13 text-4xl font-semibold 2xl:col-span-2">
		<div class="flex flex-row">
			<a href="/design" class="h-fit w-fit p-4">design</a>
			<div class="bg-red-500"></div>
		</div>
		<div class="flex flex-row">
			<a href="/projects" class="h-fit w-fit p-4">projects</a>
			<div class="bg-red-500"></div>
		</div>
		<div class="flex flex-row">
			<a href="/about" class="h-fit w-fit p-4">about</a>
			<div class="bg-red-500"></div>
		</div>
	</nav>
</div>

<!-- <style>
	.test {
		background-image:
			linear-gradient(120deg, #808080 15%, transparent 15%),
			linear-gradient(60deg, #808080 15%, transparent 15%);
		background-size: 50px 50px;
		background-position:
            30px 10px,
            -20px 10px;
	}
</style> -->
