<script>
    let props = $props();
</script>

<button {...props} 
        class="bg-red-600 px-4 py-2 rounded-lg text-white 
               hover:bg-red-700 active:bg-red-800 
               focus:outline-none focus:ring-2 focus:ring-red-400 
               disabled:opacity-50 disabled:cursor-not-allowed">
    Click for kaboom
</button>