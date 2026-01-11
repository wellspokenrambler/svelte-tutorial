<script>
	import { count } from './shared.js';
</script>

<button onclick={() => $count += 1}  class="bg-orange-500 px-2 py-1 rounded-sm text-white">
	clicks: {$count}
</button>
