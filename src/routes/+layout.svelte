<script lang="ts">
	import { updated } from "$app/state";
	import { version } from '$app/environment';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a href="/" class="p-1 border-2 border-green-500 absolute top-0 left-0 z-10">Home</a>
{#if updated.current !== updated.previous}
	<div class="absolute bottom-0 right-0 p-4 flex flex-col gap-2 z-10">
		<p class="text-sm">Updated to v.{version}!</p>
		<button class="ml-2 px-2 py-1 bg-gray-200 rounded" onclick={() => location.reload()}>
			Reload
		</button>
	</div>
	{:else}
	<p class="absolute bottom-0 right-0 p-4text-sm text-gray-500">v.{version}</p>
{/if}
{@render children()}
