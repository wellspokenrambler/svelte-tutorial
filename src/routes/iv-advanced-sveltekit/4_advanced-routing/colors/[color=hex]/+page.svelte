<script>
    import { page } from '$app/state';
</script>

<div class="absolute inset-0 p-10 -z-1" style="background-color: #{page.params.color};">
    <h1>#{page.params.color}</h1>
</div>