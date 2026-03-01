<script lang="ts">
	import { page } from '$app/state';
	import { emojis } from '../emojis.js';
</script>

<h1>{page.status} {page.error.message} (we expected this one.)</h1>
<span style="font-size: 10em">
	{emojis[page.status] ?? emojis[500]}
</span>