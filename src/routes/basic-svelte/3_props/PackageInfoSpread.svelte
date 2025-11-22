<script>
    let content = $props();
</script>
<p class="border-2 border-dashed border-blue-500 p-2">
    The <code>{content.name}</code> package (version {content.version}) is described as: "{content.description}".
    You can find more information at <a href="{content.website}">{content.website}</a>.
    <br/>
    (my content is accessed via a single prop object <code>content</code> and their separate keys e.g. content.name, content.version, content.description, content.website)
</p>