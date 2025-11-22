<script>
    let {name, version, description,website} = $props();
</script>
<p class="border-2 border-dashed border-green-500 p-2 mb-1">
    The <code>{name}</code> package (version {version}) is described as: "{description}".
    You can find more information at <a href="{website}">{website}</a>.
    <br/>
    (my content is listed out individually e.g. name, version, description, website)
</p>