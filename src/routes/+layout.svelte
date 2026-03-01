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
<p class="absolute bottom-0 right-0 p-4 text-sm text-gray-500">v.{version}</p>
{@render children()}
