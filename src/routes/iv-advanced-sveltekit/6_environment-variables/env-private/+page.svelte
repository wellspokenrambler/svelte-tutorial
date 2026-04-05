<script>
    let { form } = $props();
</script>

<form method="POST">
    <label for="passphrase">Passphrase:</label>
    <input type="text" id="passphrase" name="passphrase" required>
    <button type="submit">Submit</button>
</form>

{#if form?.incorrect}
    <p class="text-red-500">wrong passphrase!</p>
{/if}