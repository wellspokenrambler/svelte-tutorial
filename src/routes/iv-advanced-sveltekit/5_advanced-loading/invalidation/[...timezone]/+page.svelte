<script>
    import { onMount } from "svelte";
    import { invalidate, invalidateAll } from "$app/navigation";

	let { data } = $props();

    onMount(() => {
        const interval = setInterval(() => {
            //invalidate('data:now');
            invalidateAll();
        }, 1000);

        return () => clearInterval(interval);
    });
</script>

<h1 class="mt-10">
	{new Intl.DateTimeFormat([], {
		timeStyle: 'full',
		timeZone: data.timezone
	}).format(new Date(data.now))}
</h1>
