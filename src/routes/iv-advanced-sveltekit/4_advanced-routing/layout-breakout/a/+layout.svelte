<script>
	let { children } = $props();
</script>

<div class="mt-6 p-2 border-2 border-dashed bg-red-100" data-name="a">
	{@render children()}
</div>
