<script>
    import { fly } from 'svelte/transition';
	let { message } = $props();
</script>

<div class="mt-4 p-2 bg-blue-200 rounded-sm border-2 border-blue-400 border-dashed"
    transition:fly={{ y: 20, duration: 500 }}>
	<h1>{message}</h1>
</div>
